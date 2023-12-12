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
                "url": "http://127.0.0.1:4523/m1/3496157-0-default/admin/into/ability"
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
                    "name": "elderId",
                    "label": "序号",
                    "sortable": true
                },
                {
                    "name": "elderlyAbilityLevel",
                    "label": "老年人能力等级",
                    "width": 20
                },
                {
                    "name": "assessor",
                    "label": "评估员",
                    "sortable": true
                },
                {
                    "name": "familyMember",
                    "label": "家属"
                },
                {
                    "name": "socialParticipationLevel",
                    "label": "社会参与评定级别"
                },
                {
                    "name": "mentalStateLevel",
                    "label": "精神状态评级"
                },
                {
                    "name": "dailyActivityLevel",
                    "label": "日常生活活动"
                },
                {
                    "name": "perceptionCommunicationLevel",
                    "label": "感知觉与沟通"
                },
                {
                    "name": "createTime",
                    "label": "创建时间"
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
                                            "name": "elderId",
                                            "label": "编号"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "elderlyAbilityLevel",
                                            "label": "老年人能力等级"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "assessor",
                                            "label": "评估员"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "familyMember",
                                            "label": "家属"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "socialParticipationLevel",
                                            "label": "社会参与评定级别"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "mentalStateLevel",
                                            "label": "精神状态评级"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "dailyActivityLevel",
                                            "label": "日常生活活动"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "perceptionCommunicationLevel",
                                            "label": "感知觉与沟通"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "static",
                                            "name": "createTime",
                                            "label": "创建时间"
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
                                        "url": "http://127.0.0.1:4523/m1/3496157-0-default/admin/into/modify2"
                                    },
                                    "body": [
                                        {
                                            "type": "input-number",
                                            "name": "elderId",
                                            "label": "编号",
                                            "showSteps": false
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-number",
                                            "name": "elderlyAbilityLevel",
                                            "label": "老年人能力等级",
                                            "showSteps": false
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "assessor",
                                            "label": "评估员"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "familyMember",
                                            "label": "家属"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-number",
                                            "name": "socialParticipationLevel",
                                            "label": "社会参与评定级别",
                                            "showSteps": false
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-number",
                                            "name": "mentalStateLevel",
                                            "label": "精神状态评级",
                                            "showSteps": false
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "dailyActivityLevel",
                                            "label": "日常生活活动"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "perceptionCommunicationLevel",
                                            "label": "感知觉与沟通"
                                        },
                                        {
                                            "type": "divider"
                                        },
                                        {
                                            "type": "input-datetime",
                                            "name": "createTime",
                                            "label": "创建时间"
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