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
          <el-button
            @click="downloadFile(scope.row.name)"
            type="text"
            size="small"
            >下载</el-button
          >
          <el-button
            @click="deleteFile(scope.row.name)"
            type="text"
            size="small"
            style="color: red"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      uploadUrl: `/hdfs/`, // HDFS 上传地址
    };
  },
  methods: {
    async fetchFiles() {
      try {
        const response = await fetch("/hdfs/?op=LISTSTATUS");
        if (!response.ok) throw new Error("获取文件列表失败");

        const data = await response.json();
        this.files = data.FileStatuses.FileStatus.map((file) => ({
          name: file.pathSuffix,
          size: this.formatFileSize(file.length),
        }));
      } catch (error) {
        this.$message.error(error.message || "错误获取文件列表");
      }
    },

    async createFile(fileName) {
      const encodedFileName = encodeURIComponent(fileName);
      const url = `${this.uploadUrl}${encodedFileName}?op=CREATE&overwrite=true`;
      try {
        const response = await fetch(url, {
          method: "PUT",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`创建文件失败: ${errorData.message || "未知错误"}`);
        }

        return url; // 返回用于上传的 URL
      } catch (error) {
        this.$message.error(error.message || "创建文件时出错");
      }
    },

    async uploadFile(file) {
      const uploadUrl = await this.createFile(file.name); // 创建文件并获取上传 URL
      if (!uploadUrl) return; // 如果没有获取到 URL，则返回

      const formData = new FormData(); // 创建 FormData 对象
      formData.append("file", file); // 将文件添加到 FormData 中

      const response = await fetch(uploadUrl, {
        method: "PUT", // 使用 PUT 方法进行上传
        body: file, // 直接将文件作为请求体
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`上传失败: ${errorData.message || "未知错误"}`);
      }

      this.$message.success("文件上传成功！"); // 上传成功提示
      await this.fetchFiles(); // 重新获取文件列表
    },

    async handleChange(file) {
      if (file.status === "success") {
        await this.uploadFile(file.raw);
      }
    },

    async downloadFile(fileName) {
      try {
        const response = await fetch(`/hdfs/${fileName}?op=OPEN`);
        if (!response.ok) throw new Error("下载失败");

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        this.$message.error(error.message || "下载文件时出错");
      }
    },

    async deleteFile(fileName) {
      try {
        const response = await fetch(`/hdfs/${fileName}?op=DELETE`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`删除失败: ${errorData.message || "未知错误"}`);
        }

        this.$message.success("文件删除成功！");
        await this.fetchFiles();
      } catch (error) {
        this.$message.error(error.message || "删除文件时出错");
      }
    },

    formatFileSize(size) {
      if (size === 0) return "0 Bytes";
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      const i = parseInt(Math.floor(Math.log(size) / Math.log(1024)), 10);
      return Math.round(size / Math.pow(1024, i), 2) + " " + sizes[i];
    },

    handleBeforeUpload(file) {
      // 可以添加自定义上传前的处理逻辑
      return true; // 返回 true 以允许上传
    },
  },
  mounted() {
    this.fetchFiles(); // 组件挂载时获取文件列表
  },
};
</script>

<style scoped>
.upload-demo i {
  font-size: 28px;
}
</style>
