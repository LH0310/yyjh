import schema2component from "@/utils/schema2component";

const schema = {
  type: "page",
  title: "就诊记录",
  body: {
    type: "crud",
    api: "https://mock.apifox.com/m1/3496157-0-default/medicalVisit",
    "headerToolbar": [
        {
          "label": "新增",
          "type": "button",
          "actionType": "dialog",
          "level": "primary",
          "dialog": {
            "title": "新增",
            "body": {
              "type": "form",
              "api": {
                "method": "post",
                "url": "https://mock.apifox.com/m1/3496157-0-default/medicalVisit"
              },
              body: [
                {
                  type: "input-datetime",
                  name: "visitTime",
                  label: "就诊时间",
                  required: true
                },
                {
                  type: "input-number",
                  name: "elderlyId",
                  label: "老人ID",
                  required: true
                },
                {
                  type: "input-text",
                  name: "accompanyingPerson",
                  label: "陪同人员"
                },
                {
                  type: "input-text",
                  name: "doctorName",
                  label: "医生姓名"
                },
                {
                  type: "select",
                  name: "isOutstandingPayment",
                  label: "是否有未结账款",
                  options: [
                    { label: "是", value: "yes" },
                    { label: "否", value: "no" }
                  ],
                  required: true
                },
                {
                  type: "textarea",
                  name: "diagnosisResult",
                  label: "诊断结果"
                },
                {
                  type: "select",
                  name: "visitType",
                  label: "就诊类型",
                  options: [
                    { label: "住院", value: "zhuyuan" },
                    { label: "门诊", value: "menzhen" }
                  ],
                  required: true
                },
                {
                  type: "textarea",
                  name: "remarks",
                  label: "备注"
                }
              ],
            }
          },
          "id": "u:b5b400a07950"
        },
        "bulkActions"
      ],
    columns: [
      {
        name: "visit_id",
        label: "就诊记录ID",
      },
      {
        name: "name",
        label: "老人姓名",
      },
      {
        name: "visit_time",
        label: "就诊时间",
      },
      {
        type: "operation",
        label: "操作",
        buttons: [
          {
            label: "详情",
            type: "button",
            level: "link",
            actionType: "dialog",
            dialog: {
              title: "查看详情",
              body: {
                  initApi: {
                    method: 'get',
                    url: 'https://mock.apifox.com/m1/3496157-0-default/medicalVisitDetail',
                    // 这里假设您的API需要就诊记录的ID来获取详情
                    data: {
                      visitId: '${visit_id}'
                    }
                  },
                type: "form",
                // 在这里添加 api 属性来获取详细信息
                body: [
                    {
                      type: "static",
                      name: "accompanying_person",
                      label: "陪同人员"
                    },
                    {
                      type: "static",
                      name: "doctor_name",
                      label: "医生姓名"
                    },
                    {
                      type: "static",
                      name: "is_outstanding_payment",
                      label: "是否有未结账款",
                      // 根据返回的yes或no显示对应的文本
                      mapping: {
                        "yes": "有",
                        "no": "无"
                      }
                    },
                    {
                      type: "static",
                      name: "diagnosis_result",
                      label: "诊断结果"
                    },
                    {
                      type: "static",
                      name: "visit_type",
                      label: "就诊类型",
                      // 假设zhuyuan代表住院，可以根据实际情况添加更多的映射
                      mapping: {
                        "zhuyuan": "住院",
                        "menzhen": "门诊"
                      }
                    },
                    {
                      type: "static",
                      name: "remarks",
                      label: "备注"
                    }
                  ],
              },
            },
          },
          {
            label: "删除",
            type: "button",
            level: "link",
            className: "text-danger",
            disabledOn: "this.grade === 'A'",
          },
        ],
      },
    ],
  },
};

export default schema2component(schema);
