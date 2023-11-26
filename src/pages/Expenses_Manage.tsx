import schema2component from "@/utils/schema2component";

const schema = {
  type: "page",
  title: "费用管理",
  name: "expenses_manage",
  toolbar: [
    {
      type: "button",
      actionType: "dialog",
      label: "新增入住费用清单",
      icon: "fa fa-plus pull-left",
      primary: true,
      dialog: {
        title: "新增入住费用清单",
        body: {
          type: "form",
          name: "sample-edit-form",
          api: {
            method: "post",
            url: "http://pkqxj8.natappfree.cc/admin/billRecord",
          },
          body: [
            {
              type: "input-text",
              name: "elderlyId",
              label: "老人ID",
              required: true,
            },
            // {
            //   type: "divider",
            // },
            // {
            //   type: "input-text",
            //   name: "elderlyname",
            //   label: "老人姓名",
            //   required: true,
            // },
            {
              type: "divider",
            },
            {
              type: "select",
              name: "selectRoom",
              label: "户型类别",
              placeholder: "选择户型类别",
              options: [
                {
                  label: "标准两人间-1280元每月",
                  value: 1,
                },
                {
                  label: "标准四人间-1080元每月",
                  value: 2,
                },
                {
                  label: "套房夫妻间-2400元每月",
                  value: 3,
                },
                {
                  label: "套房两人间-1680元每月",
                  value: 4,
                },
              ],
              // required: true,
            },
            {
              type: "select",
              name: "selectNursingLevel",
              label: "护理内容",
              placeholder: "选择护理内容（级别）",
              options: [
                {
                  label: "三级-60元每月",
                  value: 5,
                },
                {
                  label: "二级-120元每月",
                  value: 6,
                },
                {
                  label: "一级-360元每月",
                  value: 7,
                },
                {
                  label: "特级-480元每月",
                  value: 8,
                },
              ],
              // required: true,
            },
            {
              type: "divider",
            },
            {
              type: "select",
              name: "selectFaceClean",
              label: "洗脸",
              placeholder: "选择洗脸级别）",
              options: [
                {
                  label: "协助洗脸-60元每月",
                  value: 9,
                },
                {
                  label: "帮助洗脸-90元每月",
                  value: 10,
                },
                {
                  label: "面部清洁-120元每月",
                  value: 11,
                },
              ],
              // required: true,
            },
            {
              type: "select",
              name: "selectMouthLevel",
              label: "口腔清洁",
              placeholder: "选择口腔清洁级别",
              options: [
                {
                  label: "口腔（假牙）清洁-60元每月",
                  value: 12,
                },
                {
                  label: "口腔护理-120元每月",
                  value: 13,
                },
              ],
              // required: true,
            },
            {
              type: "select",
              name: "selectFootLevel",
              label: "洗脚",
              placeholder: "选择洗脚内容",
              options: [
                {
                  label: "协助打洗脚水-60元每月",
                  value: 14,
                },
                {
                  label: "帮助洗脚洗袜-90元每月",
                  value: 15,
                },
              ],
              // required: true,
            },
            {
              type: "select",
              name: "selectBathLevel",
              label: "沐浴内容",
              placeholder: "选择沐浴内容",
              options: [
                {
                  label: "协助沐浴-60元每月",
                  value: 16,
                },
                {
                  label: "帮助沐浴-90元每月",
                  value: 17,
                },
                {
                  label: "擦身沐浴-180元每月",
                  value: 18,
                },
              ],
              // required: true,
            },
            {
              type: "select",
              name: "selectCleanLowerPartBody",
              label: "清洗下身",
              placeholder: "",
              options: [
                {
                  label: "选择-120元每月",
                  value: 19,
                },
              ],
            },
            {
              type: "select",
              name: "selectCleanClothes",
              label: "清洗衣物",
              placeholder: "",
              options: [
                {
                  label: "选择-60元每月",
                  value: 20,
                },
              ],
            },
            {
              type: "select",
              name: "selectWearingLevel",
              label: "穿脱衣",
              placeholder: "选择穿拖衣内容",
              options: [
                {
                  label: "协助穿脱衣-180元每月",
                  value: 21,
                },
                {
                  label: "帮助穿脱衣-210元每月",
                  value: 22,
                },
              ],
              // required: true,
            },
            {
              type: "select",
              name: "selectToiletLevel",
              label: "如厕",
              placeholder: "选择如厕内容",
              options: [
                {
                  label: "协助入厕-300元每月",
                  value: 23,
                },
                {
                  label: "大小便清洁-480元每月",
                  value: 24,
                },
                {
                  label: "大小便护理-600元每月",
                  value: 25,
                },
              ],
              // required: true,
            },
            {
              type: "select",
              name: "selectWheelchairLevel",
              label: "轮椅",
              placeholder: "选择协助轮椅内容",
              options: [
                {
                  label: "轮椅协助-180元每月",
                  value: 26,
                },
                {
                  label: "抱扶轮椅-240元每月",
                  value: 27,
                },
              ],
              // required: true,
            },
            {
              type: "input-number",
              name: "totalAmount",
              label: "费用金额",
              min: "0",
              required: true,
            },
            {
              type: "divider",
            },
          ],
        },
      },
    },
  ],
  body: {
    type: "crud",
    draggable: true,
    api: "http://pkqxj8.natappfree.cc/admin/billRecord/lists", //api
    filterTogglable: true,
    headerToolbar: [
      "bulkActions",
      {
        type: "tpl",
        tpl: "定制内容示例：当前有 ${count} 条数据。",
        className: "v-middle",
      },
      {
        type: "columns-toggler",
        align: "right",
      },
      {
        type: "drag-toggler",
        align: "right",
      },
      {
        type: "pagination",
        align: "right",
      },
    ],
    footerToolbar: [
      "statistics",
      {
        type: "pagination",
        layout: "perPage,pager,go",
      },
    ],
    columns: [
      //展示第一列和搜索第一框的属性内容
      {
        name: "elderlyId",
        label: "老人ID",
        searchable: {
          type: "input-text",
          name: "elderlyId",
          label: "老人ID",
          placeholder: "输入老人ID",
        },
        fixed: "left",
      },
      {
        name: "elderlyName",
        label: "老人姓名",
        fixed: "left",
        searchable: {
          type: "input-text",
          name: "elderlyName",
          label: "老人姓名",
          placeholder: "输入老人姓名",
        },
      },

      {
        name: "totalAmount",
        label: "费用金额",
        width: 500,
      },

      {
        name: "expenseTime",
        label: "新增时间",
      },
      {
        type: "operation",
        label: "操作",
        width: 100,
        buttons: [
          {
            type: "button",
            icon: "fa fa-eye",
            actionType: "dialog",
            tooltip: "查看",
            dialog: {
              title: "查看",
              body: {
                type: "crud",
                api: {
                  url: "http://pkqxj8.natappfree.cc/admin/billRecord",
                  // 这里假设您的API需要就诊记录的ID来获取详情
                  data: {
                    billId: "${id}",
                  },
                },
                columns: [
                  {
                    name: "billItemId",
                    label: "收费项目",
                    type: "mapping",
                    map: {
                      "1": "标准两人间-1280元每月",
                      "2": "标准四人间-1080元每月",
                      "3": "套房夫妻间-2400元每月",
                      "4": "套房两人间-1680元每月",
                      "5": "三级-60元每月",
                      "6": "二级-120元每月",
                      "7": "一级-360元每月",
                      "8": "特级-480元每月",
                      "9": "协助洗脸-60元每月",
                      "10": "帮助洗脸-90元每月",
                      "11": "面部清洁-120元每月",
                      "12": "口腔（假牙）清洁-60元每月",
                      "13": "口腔护理-120元每月",
                      "14": "协助打洗脚水-60元每月",
                      "15": "帮助洗脚洗袜-90元每月",
                      "16": "协助沐浴-60元每月",
                      "17": "帮助沐浴-90元每月",
                      "18": "擦身沐浴-180元每月",
                      "19": "清洗下身-120元每月",
                      "20": "清洗衣物-60元每月",
                      "21": "轮椅协助-180元每月",
                      "22": "抱扶轮椅-240元每月",
                      "23": "协助入厕-300元每月",
                      "24": "大小便清洁-480元每月",
                      "25": "大小便护理-600元每月",
                      "26": "协助穿脱衣-180元每月",
                      "27": "帮助穿脱衣-210元每月",
                      "*": "未知",

                    },
                  },
                ],
              },
            },
          },
          {
            type: "button",
            icon: "fa fa-times text-danger",
            actionType: "ajax",
            tooltip: "删除",
            confirmText: "您确认要删除?",
            api: {
              url: "http://pkqxj8.natappfree.cc/admin/billRecord?billId=${id}",
              method: "delete",
            },
          },
        ],
        toggled: true,
      },
    ],
  },
};

export default schema2component(schema);
