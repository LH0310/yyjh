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
            "url": "https://mock.apifox.com/m1/3496157-0-default/admin/into/query2"
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
                                        "name": "elder_id",
                                        "label": "老年人id：",
                                        "placeholder": "请输入",
                                        "type": "input-text"
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
        "api": {
            "method": "get",
            "url": "https://mock.apifox.com/m1/3496157-0-default/admin/into/ability",
            "data": {
            }
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
                "name": "elder_id",
                "label": "序号",
                "sortable": true
            },
            {
                "name": "elder_ability_level",
                "label": "老年人能力等级",
                "width": 20
            },
            {
                "name": "assessor",
                "label": "评估员",
                "sortable": true
            },
            {
                "name": "family_member",
                "label": "家属"
            },
            {
                "name": "social_participation_level",
                "label": "社会参与评定级别"
            },
            {
                "name": "mental_state_level",
                "label": "精神状态评级"
            },
            {
                "name": "daily_activity_level",
                "label": "日常生活活动"
            },
            {
                "name": "perception_communication_level",
                "label": "感知觉与沟通"
            },
            {
                "name": "create_time",
                "label": "创建时间"
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
                                "label": "插入",
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