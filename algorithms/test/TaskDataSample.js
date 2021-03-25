
export default  [
    {
        "id": 1,
        "taskId": "A",
        "name": "Tạo phiếu xuất kho",
        "description": "- Người thủ kho tạo phiếu xuất kho với đầy đủ các ràng buộc về số lượng cũng như chất lượng",
        "actors": "Thủ kho",
        "pertProb": 0.6658824291023753,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [],
        "taskInformation": {
            "id": 1,
            "taskId": "A",
            "expectedTime": 5.5,
            "optimistic": 3.0,
            "mostlikely": 5.0,
            "pessimistic": 10.0,
            "duration": 6.0,
            "es": 0.0,
            "ls": 0.0,
            "ef": 6.0,
            "lf": 6.0,
            "slack": 0.0
        }
    },
    {
        "id": 2,
        "taskId": "B",
        "name": "Chuyển kho vật lý",
        "description": "- Yêu cầu chuẩn bị nhân sự ở kho vật lý để tiến hành xuất kho.\n- Gửi thông tin về đơn hàng cho các nhân viên kho vật lý",
        "actors": "Thủ kho ",
        "pertProb": 0.22662735237686815,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [
            "A"
        ],
        "taskInformation": {
            "id": 2,
            "taskId": "B",
            "expectedTime": 8.0,
            "optimistic": 6.0,
            "mostlikely": 8.0,
            "pessimistic": 10.0,
            "duration": 7.5,
            "es": 6.0,
            "ls": 6.0,
            "ef": 13.5,
            "lf": 13.5,
            "slack": 0.0
        }
    },
    {
        "id": 3,
        "taskId": "C",
        "name": "Chuẩn bị nhân sự",
        "description": "- Thủ kho chuẩn bị nhân sự để tiến hành xuất kho",
        "actors": "Thủ kho",
        "pertProb": 0.6914624612740129,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [
            "B"
        ],
        "taskInformation": {
            "id": 3,
            "taskId": "C",
            "expectedTime": 6.666666666666667,
            "optimistic": 6.0,
            "mostlikely": 6.0,
            "pessimistic": 10.0,
            "duration": 7.0,
            "es": 13.5,
            "ls": 13.5,
            "ef": 20.5,
            "lf": 20.5,
            "slack": 0.0
        }
    },
    {
        "id": 4,
        "taskId": "D",
        "name": "Di chuyển xe lấy hàng",
        "description": "- Nhân viên kho di chuyển xe lấy hàng ở các zone",
        "actors": "Nhân viên : 2 \nXe tay nâng : 2",
        "pertProb": 0.9522096477271853,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [
            "C"
        ],
        "taskInformation": {
            "id": 4,
            "taskId": "D",
            "expectedTime": 3.1666666666666665,
            "optimistic": 2.0,
            "mostlikely": 3.0,
            "pessimistic": 5.0,
            "duration": 4.0,
            "es": 20.5,
            "ls": 30.5,
            "ef": 24.5,
            "lf": 34.5,
            "slack": 10.0
        }
    },
    {
        "id": 5,
        "taskId": "E",
        "name": "Dỡ hàng từ trên kệ",
        "description": "- Nhân viên dỡ hàng từ trên kệ dựa theo đơn hàng nhận từ thủ kho",
        "actors": "Nhân viên : 4",
        "pertProb": 0.3341175708976247,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [
            "C"
        ],
        "taskInformation": {
            "id": 5,
            "taskId": "E",
            "expectedTime": 6.5,
            "optimistic": 4.0,
            "mostlikely": 6.0,
            "pessimistic": 11.0,
            "duration": 6.0,
            "es": 20.5,
            "ls": 20.5,
            "ef": 26.5,
            "lf": 26.5,
            "slack": 0.0
        }
    },
    {
        "id": 6,
        "taskId": "F",
        "name": "Check quẹt",
        "description": "- Nhân viên check quẹt barcode của các mặt hàng sau khi lấy hàng từ kệ xuống:",
        "actors": "Nhân viên : 4",
        "pertProb": 0.5567984968164683,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [
            "E"
        ],
        "taskInformation": {
            "id": 6,
            "taskId": "F",
            "expectedTime": 7.833333333333333,
            "optimistic": 6.0,
            "mostlikely": 7.0,
            "pessimistic": 13.0,
            "duration": 8.0,
            "es": 26.5,
            "ls": 26.5,
            "ef": 34.5,
            "lf": 34.5,
            "slack": 0.0
        }
    },
    {
        "id": 7,
        "taskId": "G",
        "name": "Mang hàng đến khu vực đóng gói",
        "description": "- Mang hàng đến khu vực đóng gói",
        "actors": "Nhân viên : 2 \nXe tay nâng :2",
        "pertProb": 0.15865525393145719,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [
            "D",
            "F"
        ],
        "taskInformation": {
            "id": 7,
            "taskId": "G",
            "expectedTime": 3.1666666666666665,
            "optimistic": 3.0,
            "mostlikely": 3.0,
            "pessimistic": 4.0,
            "duration": 3.0,
            "es": 34.5,
            "ls": 34.5,
            "ef": 37.5,
            "lf": 37.5,
            "slack": 0.0
        }
    },
    {
        "id": 8,
        "taskId": "H",
        "name": "Kiểm tra chất lượng hàng",
        "description": "- Chuyên viên kiểm tra chất lượng thực hiện kiểm tra chất lượng các mặt hàng tại khu vực đóng gói",
        "actors": "QA: 1",
        "pertProb": 0.36944134018176344,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [
            "G"
        ],
        "taskInformation": {
            "id": 8,
            "taskId": "H",
            "expectedTime": 7.166666666666667,
            "optimistic": 6.0,
            "mostlikely": 7.0,
            "pessimistic": 9.0,
            "duration": 7.0,
            "es": 37.5,
            "ls": 37.5,
            "ef": 44.5,
            "lf": 44.5,
            "slack": 0.0
        }
    },
    {
        "id": 9,
        "taskId": "I",
        "name": "Đóng gói hàng ",
        "description": "- Nhân viên đóng gói hàng theo đúng yêu cầu từ phía khách hàng và đảm bảo yêu cầu về mặt chất lượng",
        "actors": "Nhân viên : 4",
        "pertProb": 0.5,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [
            "G"
        ],
        "taskInformation": {
            "id": 9,
            "taskId": "I",
            "expectedTime": 6.0,
            "optimistic": 5.0,
            "mostlikely": 6.0,
            "pessimistic": 7.0,
            "duration": 6.0,
            "es": 37.5,
            "ls": 38.5,
            "ef": 43.5,
            "lf": 44.5,
            "slack": 1.0
        }
    },
    {
        "id": 10,
        "taskId": "J",
        "name": "Đóng hàng theo lô và di chuyển đến khu vực vận chuyển",
        "description": "- Nhân viên sử dụng xe nâng hàng để di chuyển đến khu vực vận chuyển ",
        "actors": "Nhân viên :2\nXe nâng hàng : 2",
        "pertProb": 0.9331927987311419,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [
            "H",
            "I"
        ],
        "taskInformation": {
            "id": 10,
            "taskId": "J",
            "expectedTime": 6.0,
            "optimistic": 5.0,
            "mostlikely": 6.0,
            "pessimistic": 7.0,
            "duration": 6.5,
            "es": 44.5,
            "ls": 44.5,
            "ef": 51.0,
            "lf": 51.0,
            "slack": 0.0
        }
    },
    {
        "id": 11,
        "taskId": "K",
        "name": "Hoàn thành xuất kho và cập nhật số liệu",
        "description": "- Kho vật lý kết thúc quá trình xuất kho, cập nhật thông tin xuất kho vào thẻ kho, kết thúc phiếu xuất kho ERP .\n- Thủ kho chuyển phiếu xuất kho/ Phiếu xuất điều chuyển cho Quản lý số liệu kho vật lý để cập nhật số liệu vào Nhật ký kho,\n-Cập nhật lại cơ sở dữ liệu của kho",
        "actors": "Thủ kho",
        "pertProb": 0.5987063256829237,
        "prob": 0.0,
        "start": null,
        "end": null,
        "parentList": [
            "J"
        ],
        "taskInformation": {
            "id": 11,
            "taskId": "K",
            "expectedTime": 3.6666666666666665,
            "optimistic": 1.0,
            "mostlikely": 3.0,
            "pessimistic": 9.0,
            "duration": 4.0,
            "es": 51.0,
            "ls": 51.0,
            "ef": 55.0,
            "lf": 55.0,
            "slack": 0.0
        }
    }
]
