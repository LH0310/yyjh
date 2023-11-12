import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "remark": null,
    "name": "basic_situation",
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
                                "api": "http://localhost:3000/add",
                                "columnCount": 4,
                                "body": [
                                    {
                                        "type": "group",
                                        "body": [

                                        ]
                                    },
                                    {
                                        "type": "input-text",
                                        "name": "name",
                                        "placeholder": "张三",
                                        "label": "长者姓名："
                                    },
                                    {
                                        "name": "telephone",
                                        "type": "input-number",
                                        "placeholder": "请输入",
                                        "label": "联系电话："
                                    },
                                    {
                                        "name": "food",
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
                                        "name": "hobbies",
                                        "type": "input-text",
                                        "placeholder": "请输入",
                                        "label": "兴趣爱好："
                                    },
                                    {
                                        "name": "work",
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
                                        "name": "living",
                                        "type": "select",
                                        "placeholder": "请选择",
                                        "label": "居住情况：",
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
                                        "name": "id",
                                        "type": "input-text",
                                        "placeholder": "请输入身份证号码",
                                        "label": "身份证号：",
                                        "onEvent": {
                                            "change": {
                                                "actions": [
                                                    {
                                                        "componentName": "gender",
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
                                        "name": "phone",
                                        "type": "input-text",
                                        "placeholder": "请输入",
                                        "label": "固定电话："
                                    },
                                    {
                                        "name": "situation",
                                        "type": "select",
                                        "placeholder": "请选择",
                                        "label": "自理情况：",
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
                                        "name": "economy",
                                        "type": "select",
                                        "placeholder": "请选择",
                                        "label": "经济来源：",
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
                                        "name": "gender",
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
                                        "name": "income",
                                        "type": "input-number",
                                        "placeholder": "请输入",
                                        "label": "月收入金额："
                                    },
                                    {
                                        "name": "age",
                                        "type": "input-number",
                                        "placeholder": "请输入",
                                        "label": "年龄："
                                    },
                                    {
                                        "name": "marriage",
                                        "type": "select",
                                        "placeholder": "请选择",
                                        "label": "婚姻状况：",
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
                                        "name": "body",
                                        "type": "select",
                                        "placeholder": "请选择",
                                        "label": "残疾类型：",
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
                                        "name": "medical",
                                        "type": "select",
                                        "placeholder": "请选择",
                                        "label": "医疗保障：",
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
                                        "type": "flex",
                                        "items": [
                                            {
                                                "type": "radios",
                                                "name": "method",
                                                "label": "意向养老方式：",
                                                "mode": "row",
                                                "options": [
                                                    {
                                                        "label": "机构养老",
                                                        "value": "a"
                                                    },
                                                    {
                                                        "label": "社区养老",
                                                        "value": "b"
                                                    },
                                                    {
                                                        "label": "居家养老",
                                                        "value": "c"
                                                    },
                                                    {
                                                        "label": "旅居养老",
                                                        "value": "d"
                                                    },
                                                    {
                                                        "label": "其他",
                                                        "value": "e"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "name": "textarea",
                                        "type": "textarea",
                                        "label": "痛点问题："
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
                                "columnCount": 4,
                                "body": [
                                    {
                                        "type": "form",
                                        "wrapWithPanel": false,
                                        "api": "http://localhost:3000/add1",
                                        "columnCount": 4,
                                        "body": [
                                            {
                                                "type": "input-text",
                                                "name": "name",
                                                "placeholder": "张三",
                                                "label": "姓名："
                                            },
                                            {
                                                "type": "input-text",
                                                "name": "relation",
                                                "placeholder": "请输入",
                                                "label": "关系："
                                            },
                                            {
                                                "type": "input-number",
                                                "name": "id",
                                                "placeholder": "请输入",
                                                "label": "身份证号："
                                            },
                                            {
                                                "type": "input-text",
                                                "name": "work",
                                                "placeholder": "请输入",
                                                "label": "工作单位："
                                            },
                                            {
                                                "type": "input-text",
                                                "name": "home",
                                                "placeholder": "请输入",
                                                "label": "家庭住址："
                                            },
                                            {
                                                "type": "input-number",
                                                "name": "telephone",
                                                "placeholder": "请输入",
                                                "label": "联系电话："
                                            }
                                        ]
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
                        "api": "http://localhost:3003/success"
                    }
                ]
            }
        ]
    }
]

}

export default schema2component(schema);