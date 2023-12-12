import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "remark": null,
    "name": "page-demo",
    "body": [
        {
            "type": "crud",
            "name": "sample",
            "api": {
                "method": "get",
                "url": "http://127.0.0.1:4523/m1/3496157-0-default/admin/into/elderly"
            },
            "filter": {
                "title": "条件搜索",
                "submitText": "",
                "body": [
                    {
                        "type": "input-text",
                        "name": "keywords",
                        "placeholder": "通过关键字搜索",
                        "addOn": {
                            "label": "搜索",
                            "type": "submit"
                        }
                    }
                ]
            },
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
                    "label": "性别"
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
                    "width": 100,
                    "buttons": [
                        {
                            "type": "button",
                            "actionType": "dialog",
                            "tooltip": "查看",
                            "label": "查看",
                            "dialog": {
                                "title": "查看",
                                "body": {
                                    "type": "form",
                                    "body": [
                                        {
                                            "type": "static",
                                            "name": "fileNumberOne",
                                            "label": "档案号"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "fileNumberTwo",
                                            "label": "编号"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "elderId",
                                            "label": "老人id"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "sex",
                                            "label": "性别"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "marriage",
                                            "label": "婚姻状况"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "idcard",
                                            "label": "身份证号"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "nation",
                                            "label": "民族"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "age",
                                            "label": "年龄"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "education",
                                            "label": "文化程度"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "eatingHabits",
                                            "label": "饮食习惯"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "hobby",
                                            "label": "兴趣爱好"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "medicalEnsurance",
                                            "label": "医保情况"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "medicalHistory",
                                            "label": "病史"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "company",
                                            "label": "工作单位"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "address",
                                            "label": "家庭住址"
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            "type": "button",
                            "tooltip": "编辑",
                            "label": "编辑",
                            "actionType": "drawer",
                            "drawer": {
                                "position": "left",
                                "size": "lg",
                                "title": "编辑",
                                "body": {
                                    "type": "form",
                                    "name": "sample-edit-form",
                                    "api": {
                                        "method": "post",
                                        "url": "http://127.0.0.1:4523/m1/3496157-0-default/admin/into/modify"
                                    },
                                    "body": [
                                        {
                                            "type": "input-text",
                                            "name": "name",
                                            "label": "姓名"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "gender",
                                            "label": "性别"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-number",
                                            "name": "age",
                                            "label": "年龄",
                                            "showSteps": false
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-number",
                                            "name": "telephone",
                                            "label": "手机号码",
                                            "showSteps": false
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-number",
                                            "name": "cash",
                                            "label": "账户余额",
                                            "showSteps": false
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "location",
                                            "label": "居住地址"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-datetime",
                                            "name": "register_time",
                                            "label": "登记入住时间"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-datetime",
                                            "name": "vacate_time",
                                            "label": "退住时间"
                                        },
                                        {
                                            "type": "select",
                                            "name": "marriage",
                                            "label": "婚姻状况",
                                            "options": [
                                                "A",
                                                "B",
                                                "C",
                                                "D",
                                                "X"
                                            ]
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-number",
                                            "name": "idcard",
                                            "label": "身份证号",
                                            "showSteps": false
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "nation",
                                            "label": "民族"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-number",
                                            "name": "age",
                                            "label": "年龄",
                                            "showSteps": false
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "select",
                                            "name": "education",
                                            "label": "文化程度",
                                            "options": [
                                                "A",
                                                "B",
                                                "C",
                                                "D",
                                                "X"
                                            ]
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "eatingHabits",
                                            "label": "饮食习惯"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "hobby",
                                            "label": "兴趣爱好"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "select",
                                            "name": "medicalEnsurance",
                                            "label": "医保情况",
                                            "options": [
                                                "A",
                                                "B",
                                                "C",
                                                "D",
                                                "X"
                                            ]
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "medicalHistory",
                                            "label": "病史"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "company",
                                            "label": "工作单位"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "address",
                                            "label": "家庭住址"
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            "type": "button",
                            "actionType": "ajax",
                            "tooltip": "删除",
                            "label": "删除",
                            "confirmText": "您确认要删除?",
                            "api": "delete:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id"
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