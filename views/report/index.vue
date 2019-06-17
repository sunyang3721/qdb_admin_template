<template>
  <div class="app-container">
    <el-col :span="24">
        <h3>{{title}}<hr></h3>
    </el-col>
    <el-row :gutter="20">
      <el-col :span="4">
         <el-select filterable v-model="value1" multiple placeholder="不限">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value1" multiple placeholder="不限">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value1" multiple placeholder="不限">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value1" multiple placeholder="不限">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value1" multiple placeholder="不限">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value1" multiple placeholder="不限">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
         <el-select filterable v-model="value1" multiple placeholder="不限">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value1" multiple placeholder="不限">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value1" multiple placeholder="不限">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="18">
        <el-button size="medium" icon="el-icon-search"> Search </el-button>
        <el-button size="medium" icon="el-icon-refresh"> Reset </el-button>
      </el-col>
    </el-row>
    <hr><br>{{info}}
    <el-row>
      <el-col :span="6" :offset="18">
        <el-button size="mini" icon="el-icon-circle-check-outline" round> Column </el-button>
        <el-button size="mini" icon="el-icon-download" round> Export </el-button>
      </el-col>
    </el-row>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      stripe
      fit
      highlight-current-row
      height="600"
    >
      <el-table-column align="center" label="媒体大类" width="100">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="媒体小类" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column label="媒体名称" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="终端平台" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="广告格式" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="购买方式" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="客户名称" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="报价类型" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="广告形式" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column label="适用年份" width="100" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
			info:'',
      list: null,
      listLoading: true,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1:[]
        // value2:[],
        // value3:[],
        // value4:[],
        // value5:[],
        // value6:[],
        // value7:[],
        // value8:[],
        // value9:[]
    }
  },
  created () {
    this.fetchData()
  },
	computed: {
		title: function() {
			return this.$route.name
		}
	},
  methods: {
    fetchData () {
      this.listLoading = true
      // getList().then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      // })
    }
  },
	mounted () {
		// let data = {'userEmail':'yang.sun@dentsu.com.cn','userPass':'123456'}
		// this.$axios.post('/qdb/loginUser.do',this.$qs.stringify(data)).then(res => {
		// 	console.log(res)
		// })
		// .catch(function (error) {
		//   console.log(error)
		// })
	}
}
</script>
<style scoped>
.el-row{margin-bottom:10px;}
hr{border:1px solid #ececec;}
</style>
