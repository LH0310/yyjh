import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "title": "药物管理",
    "name":"medical_manage",
    "toolbar": [
        {
          "type": "button",
          "actionType": "dialog",
          "label": "新增药物",
          //"flexed":"left",
          "icon": "fa fa-plus pull-left",
          
          "primary": true,
          "dialog": {
            "title": "新增",
            "body": {
              "type": "form",
              "name": "sample-edit-form",
              "api": {
                "method":"post",
                "url":"http://dia6ni.natappfree.cc/admin/medication",
              },
              "body": [
                {
                  "type": "input-number",
                  "showSteps": false,
                  "name": "elderlyId",
                  "label": "老人id",
                  "required": true
                },
                {
                  "type": "input-text",
                  "name": "medicationName",
                  "label": "药物名称",
                  "required": true
                },
                {
                  "type": "input-number",
                  "name": "frequency",
                  "label": "每日服用数量",
                  "required": true
                },
                {
                  "type": "input-number",
                  "name": "remain",
                  "label": "总数量",
                  "required": true
                },
                {
                  "type": "input-text",
                  "name": "remark",
                  "label": "备注",
                  "required": false
                }
                // {
                //   "type": "divider"
                // },
                // {
                //   "type": "input-text",
                //   "name": "version",
                //   "label": "Engine version"
                // },
                // {
                //   "type": "divider"
                // },
                // {
                //   "type": "input-text",
                //   "name": "grade",
                //   "label": "CSS grade"
                // }
              ]
            }
          }
        }
      ],
    "body": {
        "type": "crud",
        "draggable": true,
        "api": "http://dia6ni.natappfree.cc/admin/medication/allLists",
        "perPage": 50,
        "keepItemSelectionOnPageChange": true,
        "maxKeepItemSelectionLength": 11,
        "autoFillHeight": true,
        "labelTpl": "${id} ${engine}",
        "autoGenerateFilter": true,
        "bulkActions": [//位于列表顶部之前
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
        "headerToolbar": [//列表顶部
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
        "footerToolbar": [//列表底部
          "statistics",
          {
            "type": "pagination",
            "layout": "perPage,pager,go"
          }
        ],
        "columns": [//搜索板块和展示列表的列名
          {
            "name": "id",
            "label": "ID",
            "searchable": {
              "type": "input-text",
              "name": "S_MedicalID",
              "label": "药物id",
              "placeholder": "输入id"
            },
            "fixed": "left"
          },
          {
            "name": "elderlyId",
            "label": "老人id",
            "fixed": "left",
            "searchable": true
          },
          {
            "name": "elderlyName",
            "label": "老人姓名",
            "fixed": "left",
            "searchable": true
          },
          {
            "name": "medicationName",
            "label": "药物名称",
            "fixed": "left",
            "searchable": true
          },
          {
            "name": "frequency",
            "label": "服用频率",
            "fixed": "left",
            "searchable": true
          },
          {
            "name": "remain",
            "label": "总数量",
            "fixed": "left",
            "searchable": true
          },
          {
            "name": "lastTake",
            "label": "开药时间",
            "fixed": "left",
            "searchable": true
          },
          {
            "name": "remark",
            "label": "备注",
            "fixed": "left",
            "searchable": true
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