const data =
    [
        {
            "description": "Do giá nâng của các thiết bị vận chuyển không chắc chắn",
            "parentList": [
                {
                    "description": "- Do rơi sản phẩm trên đường vận chuyển.\n- Do lỗi thiết bị nhận dạng sai",
                    "parentList": [
                        "6058a6281474a610e88ba835"
                    ],
                    "_id": "6058a6281474a610e88ba834",
                    "id": 4,
                    "name": "Thiếu sản phẩm",
                    "parents": "5",
                    "task": "C,D",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcee"
                }
            ],
            "_id": "6058a6281474a610e88ba831",
            "id": 1,
            "name": "Sản phẩm bị rơi từ trên cao",
            "parents": "4",
            "task": "G,K",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.1,
                    0.9,
                    0.65,
                    0.35
                ],
                "_id": "6057f52d45559d270c3edceb",
                "id": 1,
                "parent": [
                    4
                ]
            }
        },
        {
            "description": "- Do sơ ý của nhân viên trong lúc vận chuyển sản phẩm\n- Do chập cháy điện",
            "parentList": [
                {
                    "description": "- Do rơi sản phẩm trên đường vận chuyển.\n- Do lỗi thiết bị nhận dạng sai",
                    "parentList": [
                        "6058a6281474a610e88ba835"
                    ],
                    "_id": "6058a6281474a610e88ba834",
                    "id": 4,
                    "name": "Thiếu sản phẩm",
                    "parents": "5",
                    "task": "C,D",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcee"
                }
            ],
            "_id": "6058a6281474a610e88ba832",
            "id": 2,
            "name": "Hoả hoạn",
            "parents": "4",
            "task": "G",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.2,
                    0.8,
                    0.55,
                    0.45
                ],
                "_id": "6057f52d45559d270c3edcec",
                "id": 2,
                "parent": [
                    4
                ]
            }
        },
        {
            "description": "",
            "parentList": [
                {
                    "description": "Do giá nâng của các thiết bị vận chuyển không chắc chắn",
                    "parentList": [
                        "6058a6281474a610e88ba834"
                    ],
                    "_id": "6058a6281474a610e88ba831",
                    "id": 1,
                    "name": "Sản phẩm bị rơi từ trên cao",
                    "parents": "4",
                    "task": "G,K",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edceb"
                },
                {
                    "description": "- Do rơi sản phẩm trên đường vận chuyển.\n- Do lỗi thiết bị nhận dạng sai",
                    "parentList": [
                        "6058a6281474a610e88ba835"
                    ],
                    "_id": "6058a6281474a610e88ba834",
                    "id": 4,
                    "name": "Thiếu sản phẩm",
                    "parents": "5",
                    "task": "C,D",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcee"
                }
            ],
            "_id": "6058a6281474a610e88ba833",
            "id": 3,
            "name": "Sản phẩm bị hỏng",
            "parents": "1 4",
            "task": "ALL",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.3,
                    0.7,
                    0.34,
                    0.66,
                    0.4,
                    0.6,
                    0.2,
                    0.8
                ],
                "_id": "6057f52d45559d270c3edced",
                "id": 3,
                "parent": [
                    1,
                    4
                ]
            }
        },
        {
            "description": "- Do rơi sản phẩm trên đường vận chuyển.\n- Do lỗi thiết bị nhận dạng sai",
            "parentList": [
                {
                    "description": "- Do hỏng thiết bị\n- Do đường trơn trượt",
                    "parentList": [
                        "6058a6281474a610e88ba836",
                        "6058a6281474a610e88ba837"
                    ],
                    "_id": "6058a6281474a610e88ba835",
                    "id": 5,
                    "name": "Rơi sản phẩm trên đường vận chuyển",
                    "parents": "6 7",
                    "task": "ALL",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcef"
                }
            ],
            "_id": "6058a6281474a610e88ba834",
            "id": 4,
            "name": "Thiếu sản phẩm",
            "parents": "5",
            "task": "C,D",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.14,
                    0.86,
                    0.65,
                    0.35
                ],
                "_id": "6057f52d45559d270c3edcee",
                "id": 4,
                "parent": [
                    5
                ]
            }
        },
        {
            "description": "- Do hỏng thiết bị\n- Do đường trơn trượt",
            "parentList": [
                {
                    "description": "- Do chập cháy thiết bị.\n- Do va chạm",
                    "parentList": [
                        "6058a6281474a610e88ba83a",
                        "6058a6281474a610e88ba839"
                    ],
                    "_id": "6058a6281474a610e88ba836",
                    "id": 6,
                    "name": "Thiết bị bị hỏng",
                    "parents": "10 9",
                    "task": "ALL",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcf0"
                },
                {
                    "description": "",
                    "parentList": [],
                    "_id": "6058a6281474a610e88ba837",
                    "id": 7,
                    "name": "Đường trơn trượt",
                    "task": "G,K",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcf1"
                }
            ],
            "_id": "6058a6281474a610e88ba835",
            "id": 5,
            "name": "Rơi sản phẩm trên đường vận chuyển",
            "parents": "6 7",
            "task": "ALL",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.2,
                    0.8,
                    0.43,
                    0.57,
                    0.41,
                    0.59,
                    0.22,
                    0.78
                ],
                "_id": "6057f52d45559d270c3edcef",
                "id": 5,
                "parent": [
                    6,
                    7
                ]
            }
        },
        {
            "description": "- Do chập cháy thiết bị.\n- Do va chạm",
            "parentList": [
                {
                    "description": "",
                    "parentList": [],
                    "_id": "6058a6281474a610e88ba83a",
                    "id": 10,
                    "name": "Thiết bị hỏng do va chạm",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcf4"
                },
                {
                    "description": "",
                    "parentList": [],
                    "_id": "6058a6281474a610e88ba839",
                    "id": 9,
                    "name": "Chập cháy thiết bị",
                    "task": "ALL",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcf3"
                }
            ],
            "_id": "6058a6281474a610e88ba836",
            "id": 6,
            "name": "Thiết bị bị hỏng",
            "parents": "10 9",
            "task": "ALL",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.15,
                    0.85,
                    0.34,
                    0.66,
                    0.4,
                    0.6,
                    0.7,
                    0.3
                ],
                "_id": "6057f52d45559d270c3edcf0",
                "id": 6,
                "parent": [
                    10,
                    9
                ]
            }
        },
        {
            "description": "",
            "parentList": [],
            "_id": "6058a6281474a610e88ba837",
            "id": 7,
            "name": "Đường trơn trượt",
            "task": "G,K",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.65,
                    0.35
                ],
                "_id": "6057f52d45559d270c3edcf1",
                "id": 7
            }
        },
        {
            "description": "Do hỏng thiết bị",
            "parentList": [
                {
                    "description": "- Do chập cháy thiết bị.\n- Do va chạm",
                    "parentList": [
                        "6058a6281474a610e88ba83a",
                        "6058a6281474a610e88ba839"
                    ],
                    "_id": "6058a6281474a610e88ba836",
                    "id": 6,
                    "name": "Thiết bị bị hỏng",
                    "parents": "10 9",
                    "task": "ALL",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcf0"
                }
            ],
            "_id": "6058a6281474a610e88ba838",
            "id": 8,
            "name": "Thiếu sáng",
            "parents": "6",
            "task": "ALL",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.4,
                    0.6,
                    0.65,
                    0.35
                ],
                "_id": "6057f52d45559d270c3edcf2",
                "id": 8,
                "parent": [
                    6
                ]
            }
        },
        {
            "description": "",
            "parentList": [],
            "_id": "6058a6281474a610e88ba839",
            "id": 9,
            "name": "Chập cháy thiết bị",
            "task": "ALL",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.14,
                    0.86
                ],
                "_id": "6057f52d45559d270c3edcf3",
                "id": 9
            }
        },
        {
            "description": "",
            "parentList": [],
            "_id": "6058a6281474a610e88ba83a",
            "id": 10,
            "name": "Thiết bị hỏng do va chạm",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.17,
                    0.83
                ],
                "_id": "6057f52d45559d270c3edcf4",
                "id": 10
            }
        },
        {
            "description": "- Do hỏng thiết bị.\n- Do rơi trên đường vận chuyển",
            "parentList": [
                {
                    "description": "- Do chập cháy thiết bị.\n- Do va chạm",
                    "parentList": [
                        "6058a6281474a610e88ba83a",
                        "6058a6281474a610e88ba839"
                    ],
                    "_id": "6058a6281474a610e88ba836",
                    "id": 6,
                    "name": "Thiết bị bị hỏng",
                    "parents": "10 9",
                    "task": "ALL",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcf0"
                },
                {
                    "description": "- Do hỏng thiết bị\n- Do đường trơn trượt",
                    "parentList": [
                        "6058a6281474a610e88ba836",
                        "6058a6281474a610e88ba837"
                    ],
                    "_id": "6058a6281474a610e88ba835",
                    "id": 5,
                    "name": "Rơi sản phẩm trên đường vận chuyển",
                    "parents": "6 7",
                    "task": "ALL",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcef"
                }
            ],
            "_id": "6058a6281474a610e88ba83b",
            "id": 11,
            "name": "Phân loại sản phẩm không đúng",
            "parents": "6 5",
            "task": "C,D",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.46,
                    0.54,
                    0.35,
                    0.65,
                    0.4,
                    0.6,
                    0.2,
                    0.8
                ],
                "_id": "6057f52d45559d270c3edcf5",
                "id": 11,
                "parent": [
                    6,
                    5
                ]
            }
        },
        {
            "description": "- Do hỏng thiết bị.",
            "parentList": [
                {
                    "description": "- Do chập cháy thiết bị.\n- Do va chạm",
                    "parentList": [
                        "6058a6281474a610e88ba83a",
                        "6058a6281474a610e88ba839"
                    ],
                    "_id": "6058a6281474a610e88ba836",
                    "id": 6,
                    "name": "Thiết bị bị hỏng",
                    "parents": "10 9",
                    "task": "ALL",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcf0"
                }
            ],
            "_id": "6058a6281474a610e88ba83c",
            "id": 12,
            "name": "Bảo mật",
            "parents": "6",
            "task": "C,D",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.15,
                    0.85,
                    0.75,
                    0.25
                ],
                "_id": "6057f52d45559d270c3edcf6",
                "id": 12,
                "parent": [
                    6
                ]
            }
        },
        {
            "description": "",
            "parentList": [
                {
                    "description": "- Do hỏng thiết bị.\n- Do rơi trên đường vận chuyển",
                    "parentList": [
                        "6058a6281474a610e88ba836",
                        "6058a6281474a610e88ba835"
                    ],
                    "_id": "6058a6281474a610e88ba83b",
                    "id": 11,
                    "name": "Phân loại sản phẩm không đúng",
                    "parents": "6 5",
                    "task": "C,D",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcf5"
                }
            ],
            "_id": "6058a6281474a610e88ba83d",
            "id": 13,
            "name": "Vượt quá hàng tồn kho",
            "parents": "11",
            "task": "ALL",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.45,
                    0.55,
                    0.6,
                    0.4
                ],
                "_id": "6057f52d45559d270c3edcf7",
                "id": 13,
                "parent": [
                    11
                ]
            }
        },
        {
            "description": "",
            "parentList": [
                {
                    "description": "- Do hỏng thiết bị.\n- Do rơi trên đường vận chuyển",
                    "parentList": [
                        "6058a6281474a610e88ba836",
                        "6058a6281474a610e88ba835"
                    ],
                    "_id": "6058a6281474a610e88ba83b",
                    "id": 11,
                    "name": "Phân loại sản phẩm không đúng",
                    "parents": "6 5",
                    "task": "C,D",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcf5"
                },
                {
                    "description": "- Do chập cháy thiết bị.\n- Do va chạm",
                    "parentList": [
                        "6058a6281474a610e88ba83a",
                        "6058a6281474a610e88ba839"
                    ],
                    "_id": "6058a6281474a610e88ba836",
                    "id": 6,
                    "name": "Thiết bị bị hỏng",
                    "parents": "10 9",
                    "task": "ALL",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edcf0"
                },
                {
                    "description": "",
                    "parentList": [
                        "6058a6281474a610e88ba831",
                        "6058a6281474a610e88ba834"
                    ],
                    "_id": "6058a6281474a610e88ba833",
                    "id": 3,
                    "name": "Sản phẩm bị hỏng",
                    "parents": "1 4",
                    "task": "ALL",
                    "__v": 1,
                    "riskDis": "6057f52d45559d270c3edced"
                }
            ],
            "_id": "6058a6281474a610e88ba83e",
            "id": 14,
            "name": "All Risk",
            "parents": "11 6 3",
            "task": "ALL",
            "__v": 1,
            "riskDis": {
                "probs": [
                    0.15,
                    0.85,
                    0.1,
                    0.9,
                    0.3,
                    0.7,
                    0.34,
                    0.66,
                    0.4,
                    0.6,
                    0.2,
                    0.8,
                    0.15,
                    0.85,
                    0.4,
                    0.6
                ],
                "_id": "6057f52d45559d270c3edcf8",
                "id": 14,
                "parent": [
                    11,
                    6,
                    3
                ]
            }
        }
    ]
export default data;