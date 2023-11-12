import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "remark": null,
    "name": "get_situation",
    "body": [
        {
            "type": "form",
            "wrapWithPanel": false,
            "api": {
                "method": "post",
                "url": "http://localhost:3000/requests",
                "data": {
                    "姓名": "${combo1.older_name}",
                    "手机号码": "${combo1.older_tele}",
                    "省份": "${combo1.select_1}",
                    "城市": "${combo1.select_2}",
                    "区/县": "${combo1.select_3}",
                    "具体地址": "${combo1.select_4}"
                }
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
                                            "type": "input-number"
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
            "name": "sample",
            "api": "${API_HOST}/api/amis-mock/sample?page=${page}&perPage=${perPage}&keywords=${keywords}",
            "bulkActions": [
                {
                    "label": "批量修改",
                    "type": "button",
                    "actionType": "dialog",
                    "level": "primary",
                    "dialog": {
                        "title": "批量编辑",
                        "name": "sample-bulk-edit",
                        "body": {
                            "type": "form",
                            "api": "${API_HOST}/api/amis-mock/sample/bulkUpdate2",
                            "controls": [
                                {
                                    "type": "text",
                                    "name": "engine",
                                    "label": "Engine"
                                }
                            ]
                        }
                    }
                },
                {
                    "label": "批量删除",
                    "type": "button",
                    "level": "danger",
                    "actionType": "ajax",
                    "api": "delete:${API_HOST}/api/amis-mock/sample/$ids",
                    "confirmText": "确定要批量删除?"
                }
            ],
            "columns": [
                {
                    "name": "number",
                    "label": "序号",
                    "sortable": true
                },
                {
                    "name": "name",
                    "label": "姓名",
                    "width": 20
                },
                {
                    "name": "gender",
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
                    "name": "cash",
                    "label": "账户余额"
                },
                {
                    "name": "location",
                    "label": "居住地址"
                },
                {
                    "name": "register_time",
                    "label": "登记入住时间"
                },
                {
                    "name": "vacate_time",
                    "label": "退住时间"
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
                                    "label": "恢复入住",
                                    "level": "primary",
                                    "actionType": "link",
                                    "link": "/crud/${id}"
                                },
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