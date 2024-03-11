import img from './anya.png';

const departmentListData = [
	{
		id: 'HDQT',
		name: 'Hội đồng quản trị',
		parentId: '',
		imageUrl: img,
		children: [
			{
				id: 'BKS',
				name: 'Ban kiểm soát',
				parentId: 'HDQT',
				imageUrl: img
			},
			{
				id: 'BTGD',
				name: 'Ban tổng giám đốc',
				parentId: 'HDQT',
				imageUrl: img,
				children: [
					{
						id: 'K_TC_KT',
						name: 'Khối tài chính kế toán',
						parentId: 'BTGD',
						imageUrl: img,
						children: [
							{
								id: 'BP_TC',
								name: 'Bộ phận tài chính',
								parentId: 'K_TC_KT',
								imageUrl: img
							},
							{
								id: 'BP_KT',
								name: 'Bộ phận kế toán',
								parentId: 'K_TC_KT',
								imageUrl: img,
								children: [
									{
										id: 'G_KTTH',
										name: 'Nhóm kế toán tổng hợp',
										parentId: 'BP_KT',
										imageUrl: img
									},
									{
										id: 'G_KTTH',
										name: 'Nhóm kế toán thanh toán',
										parentId: 'BP_KT',
										imageUrl: img
									},
									{
										id: 'G_KTK',
										name: 'Nhóm kế toán kho',
										parentId: 'BP_KT',
										imageUrl: img
									}
								]
							}
						]
					},
					{
						id: 'K_QTTT',
						name: 'Khối quản trị tổng hợp',
						parentId: 'BTGD',
						imageUrl: img,
						children: [
							{
								id: 'BP_HC',
								name: 'Bộ phận hành chính',
								parentId: 'K_QTTT',
								imageUrl: img,
								children: [
									{
										id: 'G_QT_VP',
										name: 'Nhóm quản trị văn phòng',
										parentId: 'BP_HC',
										imageUrl: img
									},
									{
										id: 'G_PCCC_ATLD',
										name: 'Nhóm PCCC & ATLD',
										parentId: 'BP_HC',
										imageUrl: img
									},
									{
										id: 'G_ISO',
										name: 'Nhóm ISO',
										parentId: 'BP_HC',
										imageUrl: img
									},
									{
										id: 'G_TAP_VU',
										name: 'Nhóm tạp vụ',
										parentId: 'BP_HC',
										imageUrl: img
									}
								]
							},
							{
								id: 'BP_NS',
								name: 'Bộ phận nhân sự',
								parentId: 'K_QTTT',
								imageUrl: img
							}
						]
					},
					{
						id: 'K_CUNG_UNG',
						name: 'Khối cung ứng',
						parentId: 'BTGD',
						imageUrl: img,
						children: [
							{
								id: 'BP_KH_MH',
								name: 'Bộ phận kế hoạch - mua hàng',
								parentId: 'K_CUNG_UNG',
								imageUrl: img
							},
							{
								id: 'BP_KHO_VAN_CHUYEN',
								name: 'Bộ phận kho - vận chuyển',
								parentId: 'K_CUNG_UNG',
								imageUrl: img
							}
						]
					},
					{
						id: 'K_SAN_XUAT',
						name: 'Khối sản xuất',
						parentId: 'BTGD',
						imageUrl: img,
						children: [
							{
								id: 'BP_SX_GT',
								name: 'Bộ phận sản xuất gián tiếp',
								parentId: 'K_SAN_XUAT',
								imageUrl: img,
								children: [
									{
										id: 'G_QLSX',
										name: 'Nhóm quản lý sản xuất',
										parentId: 'BP_SX_GT',
										imageUrl: img
									},
									{
										id: 'G_QA_QC',
										name: 'Nhóm QA - QC',
										parentId: 'BP_SX_GT',
										imageUrl: img
									},
									{
										id: 'G_CD_BT',
										name: 'Nhóm cơ điện - bảo trì',
										parentId: 'BP_SX_GT',
										imageUrl: img
									}
								]
							},
							{
								id: 'BP_SX_TT',
								name: 'Bộ phận sản xuất trực tiếp',
								parentId: 'K_SAN_XUAT',
								imageUrl: img,
								children: [
									{
										id: 'X_SX_CUA',
										name: 'Xưởng sản xuất cửa',
										parentId: 'BP_SX_TT',
										imageUrl: img,
										children: [
											{
												id: 'NHOM_CANH_COMPOSITE_ABS',
												name: 'Nhóm cánh composite, abs',
												parentId: 'BP_SX_TT',
												imageUrl: img,
												children: [
													{
														id: 'TO_CAT_CANH',
														name: 'Tổ cát cánh',
														parentId: 'NHOM_CANH_COMPOSITE_ABS',
														imageUrl: img
													},
													{
														id: 'TO_CNC',
														name: 'Tổ CNC',
														parentId: 'NHOM_CANH_COMPOSITE_ABS',
														imageUrl: img
													},
													{
														id: 'TO_MAI',
														name: 'Tổ mài',
														parentId: 'NHOM_CANH_COMPOSITE_ABS',
														imageUrl: img
													},
													{
														id: 'TO_HAP',
														name: 'Tổ hấp',
														parentId: 'NHOM_CANH_COMPOSITE_ABS',
														imageUrl: img
													},
													{
														id: 'TO_DAN_CANH',
														name: 'Tổ dán cạnh',
														parentId: 'NHOM_CANH_COMPOSITE_ABS',
														imageUrl: img
													},
													{
														id: 'TO_KHOAN_KHOA',
														name: 'Tổ khoan khóa',
														parentId: 'NHOM_CANH_COMPOSITE_ABS',
														imageUrl: img
													},
													{
														id: 'TO_LAM_NGUOI',
														name: 'Tổ làm nuội',
														parentId: 'NHOM_CANH_COMPOSITE_ABS',
														imageUrl: img
													}
												]
											},
											{
												id: 'NHOM_KHUNG',
												name: 'Nhóm khung',
												parentId: 'BP_SX_TT',
												imageUrl: img,
												children: [
													{
														id: 'TO_CAT_KHUNG',
														name: 'Tổ cắt khung',
														parentId: 'NHOM_KHUNG',
														imageUrl: img
													},
													{
														id: 'TO_DAN_KHUNG',
														name: 'Tổ dán khung',
														parentId: 'NHOM_KHUNG',
														imageUrl: img
													},
													{
														id: 'TO_UON_VOM',
														name: 'Tổ uốn vòm',
														parentId: 'NHOM_KHUNG',
														imageUrl: img
													}
												]
											}
										]
									},
									{
										id: 'X_SX_VAN',
										name: 'Xưởng sản xuất ván',
										parentId: 'BP_SX_TT',
										imageUrl: img,
										children: [
											{
												id: 'TO_EP_MELAMINE',
												name: 'Tổ ép melamine',
												parentId: 'X_SX_VAN',
												imageUrl: img
											},
											{
												id: 'TO_DAN_PVC',
												name: 'Tổ dán PVC',
												parentId: 'X_SX_VAN',
												imageUrl: img
											}
										]
									}
								]
							},
							{
								id: 'BP_KHO',
								name: 'Bộ phận kho',
								parentId: 'K_SAN_XUAT',
								imageUrl: img,
								children: [
									{
										id: 'KHO_CUA',
										name: 'Kho cửa',
										parentId: 'BP_KHO',
										imageUrl: img
									},
									{
										id: 'KHO_VAN',
										name: 'Kho ván',
										parentId: 'BP_KHO',
										imageUrl: img
									}
								]
							}
						]
					},
					{
						id: 'KHOI_KINH_DOANH',
						name: 'Khối kinh doanh',
						parentId: 'BTGD',
						imageUrl: img,
						children: [
							{
								id: 'BO_PHAN_TRUYEN_THONG_QUANG_CAO',
								name: 'Bộ phận truyền thông quảng cáo',
								parentId: 'KHOI_KINH_DOANH',
								imageUrl: img
							},
							{
								id: 'BO_PHAN_KINH_DOANH_GT',
								name: 'Bộ phận kinh doanh GT',
								parentId: 'KHOI_KINH_DOANH',
								imageUrl: img,
								children: [
									{
										id: 'NHOM_PHAT_TRIEN_THI_TRUONG',
										name: 'Nhóm phát triển thị trường & CSKH',
										parentId: 'BO_PHAN_KINH_DOANH_GT',
										imageUrl: img
									},
									{
										id: 'NHOM_SALE_ADMIN',
										name: 'Nhóm sale admin',
										parentId: 'BO_PHAN_KINH_DOANH_GT',
										imageUrl: img,
										children: [
											{
												id: 'ADMIN_SALE_CSKH',
												name: 'Sales & CSKH',
												parentId: 'NHOM_SALE_ADMIN',
												imageUrl: img
											},
											{
												id: 'KE_HOACH_SAN_XUAT',
												name: 'Kế hoạch sản xuất',
												parentId: 'NHOM_SALE_ADMIN',
												imageUrl: img
											},
											{
												id: 'DOI_XE',
												name: 'Đội xe',
												parentId: 'NHOM_SALE_ADMIN',
												imageUrl: img
											}
										]
									},
									{
										id: 'KHO_TRUNG_CHUYEN',
										name: 'Kho trung chuyển',
										parentId: 'BO_PHAN_KINH_DOANH_GT',
										imageUrl: img,
										children: [
											{
												id: 'SALE_CSKH',
												name: 'Sales & CSKH',
												parentId: 'KHO_TRUNG_CHUYEN',
												imageUrl: img
											},
											{
												id: 'QUAN_LY_KHO',
												name: 'Quản lý kho',
												parentId: 'KHO_TRUNG_CHUYEN',
												imageUrl: img
											},
											{
												id: 'THU_KHO',
												name: 'Thủ kho',
												parentId: 'KHO_TRUNG_CHUYEN',
												imageUrl: img
											},
											{
												id: 'LOGISTICS',
												name: 'Logistis',
												parentId: 'KHO_TRUNG_CHUYEN',
												imageUrl: img
											}
										]
									}
								]
							},
							{
								id: 'BO_PHAN_KINH_DOANH_BAN_LE',
								name: 'Bộ phận kinh doanh bán lẻ',
								parentId: 'KHOI_KINH_DOANH',
								imageUrl: img,
								children: [
									{
										id: 'SALE_ADMIN_TONG_QUAN',
										name: 'Sale admin tổng quản',
										parentId: 'BO_PHAN_KINH_DOANH_BAN_LE',
										imageUrl: img
									},
									{
										id: 'NHOM_SHOWROOM_DON_VI',
										name: 'Nhóm showroom đơn vị',
										parentId: 'BO_PHAN_KINH_DOANH_BAN_LE',
										imageUrl: img,
										children: [
											{
												id: 'QUAN_LY_SHOWROOM_TU_VAN',
												name: 'Quản lý showroom & tư vấn kỹ thuật',
												parentId: 'NHOM_SHOWROOM_DON_VI',
												imageUrl: img
											},
											{
												id: 'SALE_TU_VAN',
												name: 'Quản lý showroom & tư vấn kỹ thuật',
												parentId: 'NHOM_SHOWROOM_DON_VI',
												imageUrl: img
											},
											{
												id: 'HAU_CAN',
												name: 'Hậu cần',
												parentId: 'NHOM_SHOWROOM_DON_VI',
												imageUrl: img
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	}
];

export default departmentListData;
