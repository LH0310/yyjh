import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "remark": null,
    "name": "page-demo",
    "body": [
        {
            "type": "page",
            "body": [
                {
                    "type": "wizard",
                    "steps": [
                        {
                            "title": "第一步",
                            "body": [
                                {
                                    "type": "form",
                                    "title": "对象基本信息",
                                    "submitText": "",
                                    "api": {
                                        "method": "post",
                                        "url": "https://mock.apifox.com/m1/3496157-0-default/admin/into/register/1"
                                    },
                                    "columnCount": 4,
                                    "body": [
                                        {
                                            "type": "input-text",
                                            "name": "file_number_one",
                                            "placeholder": "张三",
                                            "label": "档案号："
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "file_number_two",
                                            "placeholder": "张三",
                                            "label": "编号："
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "elder_id",
                                            "placeholder": "张三",
                                            "label": "老人id："
                                        },
                                        {
                                            "name": "eatinghabits",
                                            "type": "select",
                                            "placeholder": "请选择",
                                            "label": "饮食习惯：",
                                            "options": [
                                                {
                                                    "label": "A",
                                                    "value": "a"
                                                },
                                                {
                                                    "label": "B",
                                                    "value": "b"
                                                },
                                                {
                                                    "label": "C",
                                                    "value": "c"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "hobby",
                                            "type": "input-text",
                                            "placeholder": "请输入",
                                            "label": "兴趣爱好："
                                        },
                                        {
                                            "name": "company",
                                            "type": "input-text",
                                            "placeholder": "请输入",
                                            "label": "工作单位："
                                        },
                                        {
                                            "name": "home",
                                            "type": "input-text",
                                            "placeholder": "请输入",
                                            "label": "家庭住址："
                                        },
                                        {
                                            "name": "medicalhistory",
                                            "type": "input-text",
                                            "placeholder": "请输入",
                                            "label": "病史："
                                        },
                                        {
                                            "name": "career",
                                            "type": "select",
                                            "placeholder": "请选择",
                                            "label": "职业：",
                                            "options": [
                                                {
                                                    "label": "A",
                                                    "value": "a"
                                                },
                                                {
                                                    "label": "B",
                                                    "value": "b"
                                                },
                                                {
                                                    "label": "C",
                                                    "value": "c"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "idcard",
                                            "type": "input-text",
                                            "placeholder": "请输入身份证号码",
                                            "label": "身份证号：",
                                            "onEvent": {
                                                "change": {
                                                    "actions": [
                                                        {
                                                            "componentName": "sex",
                                                            "args": {
                                                                "value": "${IF(number(event.data.value)%10%2===0,'男','女')}"
                                                            },
                                                            "actionType": "setValue"
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            "name": "sex",
                                            "type": "input-text",
                                            "placeholder": "由身份证号自动生成",
                                            "label": "性别："
                                        },
                                        {
                                            "name": "nation",
                                            "type": "input-text",
                                            "placeholder": "请输入",
                                            "label": "民族："
                                        },
                                        {
                                            "name": "education",
                                            "type": "select",
                                            "placeholder": "请选择",
                                            "label": "文化程度：",
                                            "options": [
                                                {
                                                    "label": "A",
                                                    "value": "a"
                                                },
                                                {
                                                    "label": "B",
                                                    "value": "b"
                                                },
                                                {
                                                    "label": "C",
                                                    "value": "c"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "age",
                                            "type": "input-number",
                                            "showSteps": false,
                                            "placeholder": "请输入",
                                            "label": "年龄："
                                        },
                                        {
                                            "name": "medicalensurance",
                                            "type": "select",
                                            "placeholder": "请选择",
                                            "label": "医保情况：",
                                            "options": [
                                                {
                                                    "label": "A",
                                                    "value": "a"
                                                },
                                                {
                                                    "label": "B",
                                                    "value": "b"
                                                },
                                                {
                                                    "label": "C",
                                                    "value": "c"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "marriage",
                                            "type": "select",
                                            "placeholder": "请选择",
                                            "label": "婚姻情况：",
                                            "options": [
                                                {
                                                    "label": "A",
                                                    "value": "a"
                                                },
                                                {
                                                    "label": "B",
                                                    "value": "b"
                                                },
                                                {
                                                    "label": "C",
                                                    "value": "c"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "input-image",
                                            "name": "avatar",
                                            "label": "image",
                                            "receiver": "https://mock.apifox.com/m1/3496157-0-default/admin/into/register/1"
                                        }
                                    ],
                                    "actions": [
                                        {
                                            "type": "submit",
                                            "level": "primary",
                                            "label": "保存"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title": "第二步",
                            "body": [
                                {"type": "form",
                                    "title": "托养人基本信息",
                                    "submitText": "",
                                    "api": "https://mock.apifox.com/m1/3496157-0-default/admin/into/register/2",
                                    "columnCount": 4,
                                    "body": [
                                        {
                                            "type": "input-text",
                                            "name": "mname",
                                            "placeholder": "张三",
                                            "label": "主托养人姓名："
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "mrelationship",
                                            "placeholder": "请输入",
                                            "label": "主托养人关系："
                                        },
                                        {
                                            "type": "input-number",
                                            "showSteps": false,
                                            "name": "midcard",
                                            "placeholder": "请输入",
                                            "label": "主托养人身份证号："
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "mcompany",
                                            "placeholder": "请输入",
                                            "label": "主托养人工作单位："
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "maddress",
                                            "placeholder": "请输入",
                                            "label": "主托养人家庭住址："
                                        },
                                        {
                                            "type": "input-number",
                                            "showSteps": false,
                                            "name": "mphonenum",
                                            "placeholder": "请输入",
                                            "label": "主托养人联系电话："
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "dname",
                                            "placeholder": "张三",
                                            "label": "副托养人姓名："
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "drelationship",
                                            "placeholder": "请输入",
                                            "label": "副托养人关系："
                                        },
                                        {
                                            "type": "input-number",
                                            "showSteps": false,
                                            "name": "didcard",
                                            "placeholder": "请输入",
                                            "label": "副托养人身份证号："
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "dcompany",
                                            "placeholder": "请输入",
                                            "label": "副托养人工作单位："
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "daddress",
                                            "placeholder": "请输入",
                                            "label": "副托养人家庭住址："
                                        },
                                        {
                                            "type": "input-number",
                                            "showSteps": false,
                                            "name": "dphonenum",
                                            "placeholder": "请输入",
                                            "label": "副托养人联系电话："
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "things",
                                            "placeholder": "请输入",
                                            "label": "随行物品："
                                        },
                                        {
                                            "type": "textarea",
                                            "name": "comments",
                                            "label": "备注"
                                        }
                                    ],
                                    "actions": [
                                        {
                                            "type": "submit",
                                            "level": "primary",
                                            "label": "保存"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title": "确定",
                            "body": [
                                "最后一步了，确认要提交吗？"
                            ],
                            "api": "https://mock.apifox.com/m1/3496157-0-default/admin/into/register/3"
                        }
                    ]
                }
            ]
        }
    ]
}

export default schema2component(schema);