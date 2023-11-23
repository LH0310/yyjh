import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "title": "费用管理",
    "name":"expenses_manage",
    "toolbar": [
        {
          "type": "button",
          "actionType": "dialog",
          "label": "新增费用",
          "icon": "fa fa-plus pull-left",
          "primary": true,
          "dialog": {
            "title": "新增费用",
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
                  "type": "input-text",
                  "name": "expenseNmae",
                  "label": "费用名称",
                  "required": true
                },
                {
                  "type": "divider"
                },
                {
                  "type": "input-number",
                  "name": "expenseValue",
                  "label": "费用金额",
                  "min":"0"
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
        "columns": [
          {
            "name": "expenseID",
            "label": "费用ID",
            "searchable": {
              "type": "input-text",
              "name": "expenseID",
              "label": "费用ID",
              "placeholder": "输入费用ID"
            },
            "fixed": "left"
          },
          {
            "name": "elderlyName",
            "label": "老人姓名",
            "fixed": "left",
            "searchable": true
          },
          {
            "name": "expenseName",
            "label": "费用名称",
            "width": 500,
            "searchable": true
          },
          {
            "name": "expenseValue",
            "label": "费用金额",
            "width": 500
          },
          
          {
            "name": "expenseTime",
            "label": "费用时间"
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