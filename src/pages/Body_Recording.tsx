import schema2component from "@/utils/schema2component";

const schema = {
    type: "page",
    title: "体征记录",
    name: "BodyRecording",
    // "toolbar": [
    //   {
    //     "type": "button",
    //     "actionType": "dialog",
    //     "label": "新增",
    //     "icon": "fa fa-plus pull-left",
    //     "primary": true,
    //     "dialog": {
    //       "title": "新增",
    //       "body": {
    //         "type": "form",
    //         "name": "sample-edit-form",
    //         "api": "post:/amis/api/sample",
    //         "body": [
    //           {
    //             "type": "input-text",
    //             "name": "engine",
    //             "label": "Engine",
    //             "required": true
    //           },
    //           {
    //             "type": "divider"
    //           },
    //           {
    //             "type": "input-text",
    //             "name": "browser",
    //             "label": "Browser",
    //             "required": true
    //           },
    //           {
    //             "type": "divider"
    //           },
    //           {
    //             "type": "input-text",
    //             "name": "platform",
    //             "label": "Platform(s)",
    //             "required": true
    //           },
    //           {
    //             "type": "divider"
    //           },
    //           {
    //             "type": "input-text",
    //             "name": "version",
    //             "label": "Engine version"
    //           },
    //           {
    //             "type": "divider"
    //           },
    //           {
    //             "type": "input-text",
    //             "name": "grade",
    //             "label": "CSS grade"
    //           }
    //         ]
    //       }
    //     }
    //   }
    // ],
    "body": {
      "type": "crud",
      "draggable": true,
      "api": "/amis/api/sample",
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
          "api": "delete:/amis/api/sample/${ids|raw}",
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
              "api": "/amis/api/sample/bulkUpdate2",
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
      "quickSaveApi": "/amis/api/sample/bulkUpdate",
      "quickSaveItemApi": "/amis/api/sample/$id",
      "filterTogglable": true,
      "headerToolbar": [ {//位于查询框下面的中间栏，在展示栏上方
        label: "新增体征记录",
        type: "button",
        actionType: "dialog",
        level: "primary",
        dialog: {
          title: "新增",
          body: {
            type: "form",
            api: {
              method: "post",
              url: " ",
            },
            body: [
              {
                type: "input-text",
                name: "ElderlyName",
                label: "老人姓名",
               
              },
              {
                type: "input-number",
                name: "ElderlyID",
                label: "老人ID",
             
                required: true,
              },
              {
                type: "input-number",
                name: "Temperature",
                label: "体温",
                "step":"0.1",
                required: true,

              },
              {
                type: "input-number",
                name: "PulseRate",
                label: "心率（脉搏）",
                required: true,


              },
              {
                type: "input-number",
                name: "RespiratoryRate",
                label: "呼吸频率",
                required: true,

              },
              {
                type: "input-number",
                name: "SystolicPressure",
                label: "高压",
                required: true,

              },
              {
                type: "input-number",
                name: "DiastolicPressure",
                label: "低压",
                required: true,

              },
              {
                type: "input-number",
                name: "BloodOxygenSaturation",
                label: "血氧饱和度",
                required: true,
              },
              {
                type: "input-number",
                name: "BloodSugar",
                label: "血糖",
                required: true,
              },
              {
                type: "textarea",
                name: "MedicalObservations",
                label: "病情观察处理",
                required: true,
              },
              
              {
                type: "textarea",
                name: "Remarks",
                label: "备注",
                required: true,

              },
              {
                type: "input-text",
                name: "Signature",
                label: "测量人签名",
                required: true,

              },
            ],
          },
        },
        id: "u:b5b400a07950",
      },
        "bulkActions",
        {
          "type": "tpl",
          "tpl": "定制内容示例：当前有 ${count} 条数据。",
          "className": "v-middle"
        },
        // {
        //   "type": "link",
        //   "href": "https://www.baidu.com",
        //   "body": "百度一下",
        //   "htmlTarget": "_parent",
        //   "className": "v-middle"
        // },
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
          "name": "Elderly",
          "label": "老人ID",
          "searchable": {
            "type": "input-number",
            "name": "ElderlyID",
            "label": "老人ID",
            "placeholder": "输入老人ID"
          },
          "fixed": "left"
        },
        {
          "name": "ElderlyName",
          "label": "老人姓名",
          "fixed": "left",
          "searchable": true
        },
        // {
        //   "name": "browser",
        //   "label": "Browser",
        //   "width": 500,
        //   "searchable": {
        //     "type": "select",
        //     "name": "browser",
        //     "label": "浏览器",
        //     "placeholder": "选择浏览器",
        //     "options": [
        //       {
        //         "label": "Internet Explorer ",
        //         "value": "ie"
        //       },
        //       {
        //         "label": "AOL browser",
        //         "value": "aol"
        //       },
        //       {
        //         "label": "Firefox",
        //         "value": "firefox"
        //       }
        //     ]
        //   }
        // },
        {
          "name": "RecordingTime",
          "label": "记录时间",
          "width": 500
        },
        // {
        //   "name": "version",
        //   "label": "Engine version",
        //   "searchable": {
        //     "type": "input-number",
        //     "name": "version",
        //     "label": "版本号",
        //     "placeholder": "输入版本号",
        //     "mode": "horizontal"
        //   }
        // },
        {
          "name": "Signaure",
          "label": "测量人员签名"
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
                  "api": "/amis/api/sample/$id",
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
              "api": "delete:/amis/api/sample/$id"
            }
          ],
          "toggled": true
        }
      ]
    }
  };

export default schema2component(schema);
