<template>
  <div class="app-container">
    <el-col :span="24">
        <h3>{{title}}<hr></h3>
    </el-col>
    <el-row :gutter="5">
      <el-col :span="4">
         <el-select filterable v-model="value1" multiple collapse-tags placeholder="媒体小类">
            <el-option
              v-for="item in  options1"
              :key="item.entryId"
              :label="item.content"
              :value="item.content">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value2" multiple collapse-tags placeholder="广告形式">
            <el-option
              v-for="item in  options2"
              :key="item.entryId"
              :label="item.content"
              :value="item.content">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value9" multiple placeholder="客户名称">
            <el-option
              v-for="item in  options9"
              :key="item.entryId"
              :label="item.content"
              :value="item.content">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value4" multiple collapse-tags placeholder="广告格式">
            <el-option
              v-for="item in  options4"
              :key="item.entryId"
              :label="item.content"
              :value="item.content">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value5" multiple collapse-tags placeholder="购买方式">
            <el-option
              v-for="item in  options5"
              :key="item.entryId"
              :label="item.content"
              :value="item.content">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value6" multiple collapse-tags placeholder="报价类型">
            <el-option
              v-for="item in  options6"
              :key="item.entryId"
              :label="item.content"
              :value="item.content">
            </el-option>
          </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="4">
         <el-select filterable v-model="value7" multiple collapse-tags placeholder="使用年份">
            <el-option
              v-for="item in  options7"
              :key="item.entryId"
              :label="item.content"
              :value="item.content">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
         <el-select filterable v-model="value8" multiple placeholder="媒体名称">
            <el-option
              v-for="item in  options8"
              :key="item.entryId"
              :label="item.content"
              :value="item.content">
            </el-option>
          </el-select>
      </el-col>
			<el-col :span="8">
			   <el-select filterable v-model="value3" style="width:100%" multiple collapse-tags placeholder="终端平台">
			      <el-option
			        v-for="item in  options3"
			        :key="item.entryId"
			        :label="item.content"
			        :value="item.content">
			      </el-option>
			    </el-select>
			</el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="18">
        <el-button size="medium" icon="el-icon-search" v-on:click="clickSearch"> Search </el-button>
        <el-button size="medium" icon="el-icon-refresh" v-on:click="clickReset"> Reset </el-button>
      </el-col>
    </el-row>
    <hr><br>
    <el-row>
      <el-col :span="6" :offset="18">
        <el-button size="mini" icon="el-icon-circle-check-outline" round> Column </el-button>
        <el-button size="mini" icon="el-icon-download" round> Export </el-button>
      </el-col>
    </el-row>
    <el-table
		  ref="tableBody"
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      stripe
      fit
      highlight-current-row
			empty-text="没有可查询的数据"
			v-loadmore="loadMore"
			:height="windownHeight"
    >
      <el-table-column align="center" label="ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="媒体小类" align="center">
        <template slot-scope="scope">
          {{ scope.row.mediaSubclass | eyFilter}}
        </template>
      </el-table-column>
      <el-table-column label="媒体名称" align="center">
        <template slot-scope="scope">
          {{ scope.row.mediaName | eyFilter}}
        </template>
      </el-table-column>
      <el-table-column label="终端平台" align="center">
        <template slot-scope="scope">
          {{ scope.row.terminalPlatform | eyFilter}}
        </template>
      </el-table-column>
      <el-table-column label="广告格式" align="center">
        <template slot-scope="scope">
          {{ scope.row.adFormat | eyFilter}}
        </template>
      </el-table-column>
      <el-table-column label="购买方式" align="center">
       <template slot-scope="scope">
         {{ scope.row.buyMode | eyFilter}}
       </template>
      </el-table-column>
      <el-table-column label="客户名称" align="center">
        <template slot-scope="scope">
          {{ scope.row.clientName | eyFilter}}
        </template>
      </el-table-column>
      <el-table-column label="报价类型" align="center">
        <template slot-scope="scope">
          {{ scope.row.quoteType | eyFilter}}
        </template>
      </el-table-column>
      <el-table-column label="广告形式" align="center">
        <template slot-scope="scope">
          {{ scope.row.adForm | eyFilter}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="适用年份" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          {{ scope.row.applicableYear | eyFilter}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getInit, getSearch} from '@/api/init'
import excel from '../../utils/excel.js'
export default {
  filters: {
    eyFilter(info) {
      if(info == '' || info == null){
				return '无'
			}else{
				return info
			}
    }
  },
  data() {
    return {
      list: null, //data数据
			infoArr: [], //滚动加载push
			windownHeight:document.documentElement.clientHeight-300, //屏幕高度控制
			loadCount: 8,  //默认每页数量
			pageNum: 1, //默认从第一页开始
			flag: true,  //判断滚动到底部是否执行 默认true 
      listLoading: true, //加载状态
			options1:'',
			options2:'',
			options3:'',
			options4:'',
			options5:'',
			options6:'',
			options7:'',
			options8:'',
			options9:'',
      value1:[],
      value2:[],
      value3:[],
      value4:[],
      value5:[],
      value6:[],
      value7:[],
      value8:[],
      value9:[]
    }
  },
  created () {
    this.fetchOption()
		this.InfoList()
  },
	computed: {
		title: function () {
			return this.$route.name
		}
	},
  methods: {
    fetchOption: function () {
      this.listLoading = true
      getInit().then(response => {
					let data = response['MCodeList']
					this.options1 = eachOption(data,'media_subclass')
					this.options2 = eachOption(data,'ad_form')
					this.options3 = eachOption(data,'terminal_platform')
					this.options4 = eachOption(data,'ad_format')
					this.options5 = eachOption(data,'buy_mode')
					this.options6 = eachOption(data,'quote_type')
					this.options7 = eachOption(data,'applicable_year')
					this.options8 = eachOption(data,'media_name')
					this.options9 = eachOption(data,'client_name')

         this.listLoading = false
      }).catch(e => {
				console.log(e)
			})
			function eachOption (data,sectionId) {
				let arrs = []
				//arrs.push({entryId:'全部',content:'全部'})
				data.forEach(function (c) {
					if(c['sectionId'] == sectionId){
						arrs.push(c)
					}
				})
				return arrs
			}
    },
		InfoList: function () {
			let data = {
				'loadCount': this.loadCount,
				'pageNum': this.pageNum,
				'mediaSubclass':this.value1,
				'adForm':this.value2,
				'terminalPlatform':this.value3,
				'adFormat':this.value4,
				'buyMode':this.value5,
				'quoteType':this.value6,
				'applicableYear':this.value7,
				'mediaName':this.value8,
				'clientName':this.value9 
			}
			getSearch(this.$qs.stringify(data)).then(response =>{
				//this.list = response['TDigitalMediaList']
				this.infoArr.push(response['TDigitalMediaList'])
				if (response['TDigitalMediaList'] == '') {
					this.flag = false
					if (response['TDigitalMediaCnt'] > 0) {
						this.$message('没有更多数据了,总共加载'+response['TDigitalMediaCnt']+'条')
					}else{
						this.$message('没有可查询的数据')
					}
				}else{
					this.flag == true
					const listArr = []
					for (const i in this.infoArr[0]) {
						for (const k in this.infoArr[i]) {
							listArr.push(this.infoArr[i][k])
						}
					}
						this.list = listArr
				}
			}).catch(e => {
				console.log(e)
			})
		},
		loadMore: function (v) {
			this.listLoading = true
			if (this.flag == true) {
				this.pageNum++
				this.InfoList()
			}
			this.listLoading = false
		},
		clickSearch: function () {
			this.listLoading = true
			this.pageNum = 1
			this.list = null
			this.infoArr = []
			this.flag = true
			this.InfoList()
			this.listLoading = false
		},
		clickReset: function () {
			this.value1 = []
			this.value2 = []
			this.value3 = []
			this.value4 = []
			this.value5 = []
			this.value6 = []
			this.value7 = []
			this.value8 = []
			this.value9 = []
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
