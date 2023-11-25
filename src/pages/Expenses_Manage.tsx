import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "title": "费用管理",
    "name":"expenses_manage",
    "toolbar": [
        {
          "type": "button",
          "actionType": "dialog",
          "label": "新增入住费用清单",
          "icon": "fa fa-plus pull-left",
          "primary": true,
          "dialog": {
            "title": "新增入住费用清单",
            "body": {
              "type": "form",
              "name": "sample-edit-form",
              "api": {
                "method":"post",
                "url":"    ",
                "data":{
                  "elderlyID":"${ElderlyID}",
                  "elderlyName":"${ElderlyName}",
                  "expenseNmae":"${ExpenseNmae}",
                  "expenseValue":"${ExpenseValue}",
                }
              },
              "body": [
                {
                  "type": "input-text",
                  "name": "elderlyID",
                  "label": "老人ID",
                  "required": true
                },
                {
                  "type": "divider"
                },
                {
                  "type": "input-text",
                  "name": "elderlyname",
                  "label": "老人姓名",
                  "required": true
                },
                {
                  "type": "divider"
                },
                {
                  "type": "select",
                  "name": "SelectRoom",
                  "label": "户型类别",
                  "placeholder": "选择户型类别",
          "options": [
            {
              "label": "标准两人间-1280元每月",
              "value": "Room_2"
            },
            {
              "label": "标准四人间-1080元每月",
              "value": "Room_4"
            },
            {
              "label": "套房夫妻间-2400元每月",
              "value": "House_Couple"
            },
            {
              "label": "套房两人间-1680元每月",
              "value": "House_2"
            }
          ],
                  "required": true
                },
                {
                  "type": "select",
                  "name": "SelectNursingLevel",
                  "label": "护理内容",
                  "placeholder": "选择护理内容（级别）",
                  "options": [
                    {
                      "label": "三级-60元每月",
                      "value": "NursingLevel_3"
                    },
                    {
                      "label": "二级-120元每月",
                      "value": "NursingLevel_2"
                    },
                    {
                      "label": "一级-360元每月",
                      "value": "NursingLevel_1"
                    },
                    {
                      "label": "特级-480元每月",
                      "value": "NursingLevel_0"
                    }
                  ],
                   "required": true

                },
                {
                  "type": "divider"
                },{
                  "type": "select",
                  "name": "SelectFaceClean",
                  "label": "洗脸",
                  "placeholder": "选择洗脸级别）",
                  "options": [
                    {
                      "label": "协助洗脸-60元每月",
                      "value": "FaceCleanLevel_3"
                    },
                    {
                      "label": "帮助洗脸-90元每月",
                      "value": "FaceCleanLevel_2"
                    },
                    {
                      "label": "面部清洁-120元每月",
                      "value": "FaceCleanLevel_1"
                    }
                  ],
                   "required": true

                },{
                  "type": "select",
                  "name": "SelectMouthLevel",
                  "label": "口腔清洁",
                  "placeholder": "选择口腔清洁级别",
                  "options": [
                   
                    {
                      "label": "口腔（假牙）清洁-60元每月",
                      "value": "MouthLevel_2"
                    },
                    {
                      "label": "口腔护理-120元每月",
                      "value": "MouthLevel_1"
                    },
                    
                  ],
                   "required": true

                },
                {
                  "type": "select",
                  "name": "SelectFootLevel",
                  "label": "洗脚",
                  "placeholder": "选择洗脚内容",
                  "options": [
                   
                    {
                      "label": "协助打洗脚水-60元每月",
                      "value": "FootLevel_2"
                    },
                    {
                      "label": "帮助洗脚洗袜-90元每月",
                      "value": "FootLevel_1"
                    },
                    
                  ],
                   "required": true

                },{
                  "type": "select",
                  "name": "SelectBathLevel",
                  "label": "沐浴内容",
                  "placeholder": "选择沐浴内容",
                  "options": [
                    {
                      "label": "协助沐浴-60元每月",
                      "value": "NursingLevel_3"
                    },
                    {
                      "label": "帮助沐浴-90元每月",
                      "value": "NursingLevel_2"
                    },
                    {
                      "label": "擦身沐浴-180元每月",
                      "value": "NursingLevel_1"
                    },
                    
                  ],
                   "required": true

                },{
                  "type": "select",
                  "name": "SelectCleanLower_Part_Body",
                  "label": "清洗下身",
                  "placeholder": "",
                  "options": [
                    {
                      "label": "选择-120元每月",
                      "value": "Selected"
                    },
                    
                  ],
                },
                {
                  "type": "select",
                  "name": "SelectCleanClothes",
                  "label": "清洗衣物",
                  "placeholder": "",
                  "options": [
                    {
                      "label": "选择-60元每月",
                      "value": "Selected"
                    },
                    
                  ],
                },{
                  "type": "select",
                  "name": "SelectWearingLevel",
                  "label": "穿脱衣",
                  "placeholder": "选择穿拖衣内容",
                  "options": [
                    
                    {
                      "label": "协助穿脱衣-180元每月",
                      "value": "WearingLevel_2"
                    },
                    {
                      "label": "帮助穿脱衣-210元每月",
                      "value": "WearingLevel_1"
                    },
                   
                  ],
                   "required": true

                },{
                  "type": "select",
                  "name": "SelectToiletLevel",
                  "label": "如厕",
                  "placeholder": "选择如厕内容",
                  "options": [
                    {
                      "label": "协助入厕-300元每月",
                      "value": "ToiletLevel_3"
                    },
                    {
                      "label": "大小便清洁-480元每月",
                      "value": "ToiletLevel_2"
                    },
                    {
                      "label": "大小便护理-600元每月",
                      "value": "ToiletLevel_1"
                    },
                   
                  ],
                   "required": true

                },{
                  "type": "select",
                  "name": "SelectWheelchairLevel",
                  "label": "轮椅",
                  "placeholder": "选择协助轮椅内容",
                  "options": [
                    {
                      "label": "轮椅协助-180元每月",
                      "value": "WheelchairLevel_2"
                    },
                    {
                      "label": "抱扶轮椅-240元每月",
                      "value": "WheelchairLevel_1"
                    },
                   
                  ],
                   "required": true

                },
                {
                  "type": "input-number",
                  "name": "expenseValue",
                  "label": "费用金额",
                  "min":"0",
                  "required": true
                },
                {
                  "type": "divider"
                }
               
              ]
            }
          }
        }
      ],
    "body": {
        "type": "crud",
        "draggable": true,
        "api": "",//api
        "perPage": 50,
        "keepItemSelectionOnPageChange": true,
        "maxKeepItemSelectionLength": 11,
        "autoFillHeight": true,
        "labelTpl": "${id} ${engine}",
        "autoGenerateFilter": true,
        "bulkActions": [
          {
            "label": "批量删除",
            "actionType": "ajax",
            "api": "delete:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/${ids|raw}",
            "confirmText": "确定要批量删除?"
          },
          {
            "label": "批量修改",
            "actionType": "dialog",
            "dialog": {
              "title": "批量编辑",
              "name": "sample-bulk-edit",
              "body": {
                "type": "form",
                "api": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/bulkUpdate2",
                "body": [
                  {
                    "type": "hidden",
                    "name": "ids"
                  },
                  {
                    "type": "input-text",
                    "name": "engine",
                    "label": "Engine"
                  }
                ]
              }
            }
          }
        ],
        "quickSaveApi": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/bulkUpdate",
        "quickSaveItemApi": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id",
        "filterTogglable": true,
        "headerToolbar": [
          "bulkActions",
          {
            "type": "tpl",
            "tpl": "定制内容示例：当前有 ${count} 条数据。",
            "className": "v-middle"
          },
          {
            "type": "link",
            "href": "https://www.baidu.com",
            "body": "百度一下",
            "htmlTarget": "_parent",
            "className": "v-middle"
          },
          {
            "type": "columns-toggler",
            "align": "right"
          },
          {
            "type": "drag-toggler",
            "align": "right"
          },
          {
            "type": "pagination",
            "align": "right"
          }
        ],
        "footerToolbar": [
          "statistics",
          {
            "type": "pagination",
            "layout": "perPage,pager,go"
          }
        ],
        "columns": [//展示第一列和搜索第一框的属性内容
          {
            "name": "elderlyID",
            "label": "老人ID",
            "searchable": {
              "type": "input-text",
              "name": "elderlyID",
              "label": "老人ID",
              "placeholder": "输入老人ID"
            },
            "fixed": "left"
          },
          {
            "name": "elderlyName",
            "label": "老人姓名",
            "fixed": "left",
            "searchable": {
              "type": "input-text",
              "name": "elderlyName",
              "label": "老人姓名",
              "placeholder": "输入老人姓名"
            },
          },
          
          {
            "name": "expenseValue",
            "label": "费用金额",
            "width": 500
          },
          
          {
            "name": "expenseTime",
            "label": "新增时间"
          },
          {
            "type": "operation",
            "label": "操作",
            "width": 100,
            "buttons": [
              {
                "type": "button",
                "icon": "fa fa-eye",
                "actionType": "dialog",
                "tooltip": "查看",
                "dialog": {
                  "title": "查看",
                  "body": {
                    "type": "form",
                    "body": [
                      {
                        "type": "static",
                        "name": "engine",
                        "label": "Engine"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "browser",
                        "label": "Browser"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "platform",
                        "label": "Platform(s)"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "version",
                        "label": "Engine version"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "grade",
                        "label": "CSS grade"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "html",
                        "html": "<p>添加其他 <span>Html 片段</span> 需要支持变量替换（todo）.</p>"
                      }
                    ]
                  }
                }
              },
              {
                "type": "button",
                "icon": "fa fa-pencil",
                "tooltip": "编辑",
                "actionType": "drawer",
                "drawer": {
                  "position": "left",
                  "size": "lg",
                  "title": "编辑",
                  "body": {
                    "type": "form",
                    "name": "sample-edit-form",
                    "api": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id",
                    "body": [
                      {
                        "type": "input-text",
                        "name": "engine",
                        "label": "Engine",
                        "required": true
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "input-text",
                        "name": "browser",
                        "label": "Browser",
                        "required": true
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "input-text",
                        "name": "platform",
                        "label": "Platform(s)",
                        "required": true
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "input-text",
                        "name": "version",
                        "label": "Engine version"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "select",
                        "name": "grade",
                        "label": "CSS grade",
                        "options": [
                          "A",
                          "B",
                          "C",
                          "D",
                          "X"
                        ]
                      }
                    ]
                  }
                }
              },
              {
                "type": "button",
                "icon": "fa fa-times text-danger",
                "actionType": "ajax",
                "tooltip": "删除",
                "confirmText": "您确认要删除?",
                "api": "delete:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id"
              }
            ],
            "toggled": true
          }
        ]
      }
}

export default schema2component(schema);