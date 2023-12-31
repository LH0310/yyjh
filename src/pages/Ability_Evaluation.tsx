import schema2component from "@/utils/schema2component";

const schema ={
    "type": "page",
    "remark": null,
    "name": "page-demo",
    "body": [
        {
            "type": "form",
            "title": "",
            "columnCount": 4,
            "api": {
                "method": "post",
                "url": "/admin/into/judge"
            },
            "body": [
                {
                    "type": "input-text",
                    "name": "name",
                    "placeholder": "张三",
                    "label": "姓名："
                },
                {
                    "name": "sex",
                    "type": "select",
                    "placeholder": "请选择",
                    "label": "性别：",
                    "options": [
                        {
                            "label": "男",
                            "value": "男"
                        },
                        {
                            "label": "女",
                            "value": "女"
                        }
                    ]
                },
                {
                    "type": "input-text",
                    "name": "age",
                    "placeholder": "张三",
                    "label": "年龄："
                },
                {
                    "type": "input-text",
                    "name": "nation",
                    "placeholder": "张三",
                    "label": "民族："
                },
                {
                    "name": "marriage",
                    "type": "select",
                    "placeholder": "请选择",
                    "label": "婚姻状况：",
                    "options": [
                        {
                            "label": "已婚",
                            "value": "已婚"
                        },
                        {
                            "label": "未婚",
                            "value": "未婚"
                        },
                        {
                            "label": "离异",
                            "value": "离异"
                        }
                    ]
                },
                {
                    "type": "input-text",
                    "name": "religiousBelif",
                    "placeholder": "张三",
                    "label": "宗教信仰："
                },
                {
                    "name": "education",
                    "type": "input-text",
                    "placeholder": "请选择",
                    "label": "文化程度：",
                },
                {
                    "type": "input-text",
                    "name": "occupation",
                    "placeholder": "张三",
                    "label": "职业："
                },
                {
                    "type": "input-text",
                    "name": "payMethod",
                    "placeholder": "张三",
                    "label": "医疗支付方式："
                },
                {
                    "type": "input-text",
                    "name": "financial",
                    "placeholder": "张三",
                    "label": "经济来源："
                },
                {
                    "type": "input-text",
                    "name": "residentialStatus",
                    "placeholder": "张三",
                    "label": "现居住状况："
                },
                {
                    "type": "input-number",
                    "showSteps": false,
                    "name": "idcard",
                    "placeholder": "张三",
                    "label": "身份证号码："
                },
                {
                    "type": "input-number",
                    "showSteps": false,
                    "name": "scardid",
                    "placeholder": "张三",
                    "label": "社保卡号码："
                },
                {
                    "type": "input-text",
                    "name": "provider",
                    "placeholder": "张三",
                    "label": "信息提供者："
                },
                {
                    "type": "input-text",
                    "name": "relationship",
                    "placeholder": "张三",
                    "label": "与老人关系："
                },
                {
                    "type": "input-text",
                    "name": "tname",
                    "placeholder": "张三",
                    "label": "联系人姓名："
                },
                {
                    "type": "input-number",
                    "showSteps": false,
                    "name": "tphone",
                    "placeholder": "张三",
                    "label": "联系人电话："
                },
                {
                    "type": "input-text",
                    "name": "assessmentReason",
                    "placeholder": "张三",
                    "label": "评估原因："
                },
                {
                    "name": "dementia",
                    "type": "select",
                    "placeholder": "请选择",
                    "label": "痴呆：",
                    "options": [
                        {
                            "label": "是",
                            "value": "是"
                        },
                        {
                            "label": "否",
                            "value": "否"
                        }
                    ]
                },
                {
                    "name": "mental_disease",
                    "type": "select",
                    "placeholder": "请选择",
                    "label": "精神疾病：",
                    "options": [
                        {
                            "label": "是",
                            "value": "是"
                        },
                        {
                            "label": "否",
                            "value": "否"
                        }
                    ]
                },
                {
                    "type": "input-text",
                    "name": "else",
                    "placeholder": "张三",
                    "label": "其他："
                },
                {
                    "name": "fall",
                    "type": "select",
                    "placeholder": "请选择",
                    "label": "跌倒：",
                    "options": [
                        {
                            "label": "是",
                            "value": "是"
                        },
                        {
                            "label": "否",
                            "value": "否"
                        }
                    ]
                },
                {
                    "name": "loss",
                    "type": "select",
                    "placeholder": "请选择",
                    "label": "走失：",
                    "options": [
                        {
                            "label": "是",
                            "value": "是"
                        },
                        {
                            "label": "否",
                            "value": "否"
                        }
                    ]
                },
                {
                    "name": "choking",
                    "type": "select",
                    "placeholder": "请选择",
                    "label": "噎食：",
                    "options": [
                        {
                            "label": "是",
                            "value": "是"
                        },
                        {
                            "label": "否",
                            "value": "否"
                        }
                    ]
                },
                {
                    "name": "suicide",
                    "type": "select",
                    "placeholder": "请选择",
                    "label": "自杀：",
                    "options": [
                        {
                            "label": "是",
                            "value": "是"
                        },
                        {
                            "label": "否",
                            "value": "否"
                        }
                    ]
                },
                {
                    "type": "input-number",
                    "name": "elderId",
                    "showSteps": false,
                    "placeholder": "张三",
                    "label": "老人id："
                }
            ]
        }
    ]
}
export default schema2component(schema);