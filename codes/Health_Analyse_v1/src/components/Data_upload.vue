<template>
    <div>
      <el-upload
        class="upload-demo"
        drag
        :action="uploadUrl"
        :before-upload="handleBeforeUpload"
        @change="handleChange"
        :show-file-list="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<span>点击上传</span></div>
      </el-upload>
  
      <el-table :data="files" style="width: 100%">
        <el-table-column prop="name" label="文件名" width="180"></el-table-column>
        <el-table-column prop="size" label="大小" width="180"></el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button @click="downloadFile(scope.row.name)" type="text" size="small">下载</el-button>
            <el-button @click="deleteFile(scope.row.name)" type="text" size="small" style="color: red;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      files: [], // 存储文件列表
    };
  },
  methods: {
    async fetchFiles() {
      try {
        const response = await fetch('/hdfs/?op=LISTSTATUS');
        if (!response.ok) {
          throw new Error('Failed to fetch file list');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        this.files = data.FileStatuses.FileStatus.map(file => ({
          name: file.pathSuffix,
          size: file.length,
        }));
      } catch (error) {
        console.error('Error fetching files:', error.message || error);
      }
    },

    async createFile(fileName) {
      const encodedFileName = encodeURIComponent(fileName);
      const url = `/hdfs/${encodedFileName}?op=CREATE&overwrite=true`;
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Length': 0, // 用于初始化文件创建的请求体
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Create file failed: ${errorData.message || 'Unknown error'}`);
        }

        const data = await response.json();
        return data.Location; // 返回用于上传的 URL
      } catch (error) {
        console.error('Error creating file:', error.message || error);
      }
    },

    async uploadFile(file) {
      const uploadUrl = await this.createFile(file.name);
      if (!uploadUrl) return;

      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(uploadUrl, {
          method: 'PUT',
          body: formData, // 使用 FormData 发送文件
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Upload failed: ${errorData.message || 'Unknown error'}`);
        }

        console.log('File uploaded successfully!');
        await this.fetchFiles(); // 上传成功后重新获取文件列表
      } catch (error) {
        console.error('Error uploading file:', error.message || error);
      }
    },

    async handleChange(file) {
      if (file.status === 'success') {
        await this.uploadFile(file.raw); // 使用 file.raw 获取对应的文件对象
      }
    },

    async downloadFile(fileName) {
      try {
        const response = await fetch(`/hdfs/${fileName}?op=OPEN`);
        if (!response.ok) {
          throw new Error('Download failed');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; // 下载时使用的文件名
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading file:', error.message || error);
      }
    },

    async deleteFile(fileName) {
      try {
        const response = await fetch(`/hdfs/${fileName}?op=DELETE`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Delete failed: ${errorData.message || 'Unknown error'}`);
        }

        console.log('File deleted successfully!');
        await this.fetchFiles(); // 删除后重新获取文件列表
      } catch (error) {
        console.error('Error deleting file:', error.message || error);
      }
    },
  },
  mounted() {
    this.fetchFiles(); // 组件挂载时获取文件列表
  }
};
</script>



  
  <style scoped>
  .upload-demo i {
    font-size: 28px;
  }
  </style>
  