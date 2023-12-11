import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "remark": null,
    "name": "page-demo",
    "body": [
    {
        "type": "form",
        "wrapWithPanel": false,
        "api": {
            "method": "post",
            "url": "https://mock.apifox.com/m1/3496157-0-default/admin/into/query"
        },
        "body": [
            {
                "type": "flex",
                "justify": "space-between",
                "items": [
                    {
                        "type": "combo",
                        "name": "combo1",
                        "items": [
                            {
                                "type": "flex",
                                "justify": "space-between",
                                "items": [
                                    {
                                        "name": "older_name",
                                        "label": "长者姓名：",
                                        "placeholder": "请输入",
                                        "type": "input-text"
                                    },
                                    {
                                        "name": "older_tele",
                                        "label": "手机号码：",
                                        "placeholder": "请输入",
                                        "type": "input-number",
                                        "showSteps": false
                                    },
                                    {
                                        "type": "select",
                                        "label": "居住地址：",
                                        "name": "select_1",
                                        "placeholder": "请选择省",
                                        "options": [
                                            {
                                                "label": "选项A",
                                                "value": "A"
                                            },
                                            {
                                                "label": "选项B",
                                                "value": "B"
                                            }
                                        ],
                                        "multiple": false,
                                        "onEvent": {
                                            "change": {
                                                "actions": [
                                                    {
                                                        "componentName": "select_2",
                                                        "args": {
                                                            "value": "${IF(event.data.value==='A','c','d')}"
                                                        },
                                                        "actionType": "setValue"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "type": "select",
                                        "name": "select_2",
                                        "placeholder": "请选择市",
                                        "options": [
                                            {
                                                "label": "C",
                                                "value": "c"
                                            },
                                            {
                                                "label": "D",
                                                "value": "d"
                                            }
                                        ],
                                        "multiple": false,
                                        "onEvent": {
                                            "change": {
                                                "actions": [
                                                    {
                                                        "componentName": "select_3",
                                                        "args": {
                                                            "value": "${IF(event.data.value==='A','c','d')}"
                                                        },
                                                        "actionType": "setValue"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "type": "select",
                                        "name": "select_3",
                                        "placeholder": "请选择区/县",
                                        "options": [
                                            {
                                                "label": "C",
                                                "value": "c"
                                            },
                                            {
                                                "label": "D",
                                                "value": "d"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "select",
                                        "name": "select_4",
                                        "placeholder": "请输入居住地址",
                                        "options": [
                                            {
                                                "label": "C",
                                                "value": "c"
                                            },
                                            {
                                                "label": "D",
                                                "value": "d"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "button-group",
                        "buttons": [
                            {
                                "type": "submit",
                                "name": "button_1",
                                "level": "primary",
                                "label": "查询"
                            },
                            {
                                "type": "reset",
                                "name": "button_2",
                                "label": "重置"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "crud",
        "headerToolbar": ["export-excel"],
        "name": "sample",
        "api": {
            "method": "get",
            "url": "/admin/into/elderly",
            "data": {
            }
        },
        "columns": [
            {
                "name": "id",
                "label": "序号",
                "sortable": true
            },
            {
                "name": "name",
                "label": "姓名"
            },
            {
                "name": "sex",
                "label": "性别",
                "sortable": true
            },
            {
                "name": "age",
                "label": "年龄"
            },
            {
                "name": "telephone",
                "label": "手机号码"
            },
            {
                "name": "location",
                "label": "居住地址"
            },
            {
                "name": "registerTime",
                "label": "登记入住时间"
            },
            {
                "type": "operation",
                "label": "操作",
                "width": "",
                "buttons": [
                    {
                        "type": "button-group",
                        "buttons": [
                            {
                                "type": "button",
                                "label": "修改",
                                "level": "info",
                                "actionType": "link",
                                "link": "/crud/${id}/edit"
                            },
                            {
                                "type": "button",
                                "label": "删除",
                                "level": "danger",
                                "actionType": "ajax",
                                "confirmText": "您确认要删除?",
                                "api": "delete:${API_HOST}/api/amis-mock/sample/$id"
                            }
                        ]
                    }
                ],
                "placeholder": "-",
                "fixed": "right"
            }
        ],
        "affixHeader": true,
        "columnsTogglable": "auto",
        "placeholder": "暂无数据",
        "tableClassName": "table-db table-striped",
        "headerClassName": "crud-table-header",
        "footerClassName": "crud-table-footer",
        "toolbarClassName": "crud-table-toolbar",
        "combineNum": 0,
        "bodyClassName": "panel-default"
    }
]
}
export default schema2component(schema);