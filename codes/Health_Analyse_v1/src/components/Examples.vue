<script setup>

    </script>

    <template>
        <h3>按钮</h3>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>

        <hr>
        <h3>按钮属性</h3>
        <el-button plain>朴素按钮</el-button>
        <el-button round>圆角按钮</el-button>
        <el-button circle>圆</el-button>
        <el-button disabled>禁用按钮</el-button>
        <el-button loading>加载中</el-button>

        <hr>
        <h3>尺寸</h3>
        <el-button size="large">大型按钮</el-button>
        <el-button>默认按钮</el-button>
        <el-button size="small">小型按钮</el-button>

        <h3>图标</h3>
        <el-icon><Plus /></el-icon>
        <el-icon><Edit /></el-icon>
        <el-icon><Delete /></el-icon>
        <el-icon class="is-loading"><Loading /></el-icon>

        <hr>
        <h3>属性</h3>
        <el-icon size="30" color="red"><Search /></el-icon>

        <hr>
        <h3>按钮</h3>
        <el-button type="primary">
            <el-icon><Search /></el-icon>
            <span> 搜索 </span>
        </el-button>

        <el-button type="primary">
            <el-icon><Search /></el-icon>
        </el-button>

        <el-button type="primary" circle>
            <el-icon><Search /></el-icon>
        </el-button>

        <hr>
        <h3>按钮组</h3>
        <el-button-group>
            <el-button type="primary">
                <el-icon><Plus /></el-icon>
            </el-button>

            <el-button type="primary">
                <el-icon><Edit /></el-icon>
            </el-button>

            <el-button type="primary">
                <el-icon><Delete /></el-icon>
            </el-button>
        </el-button-group>
    </template>

    <style scoped>

    </style>