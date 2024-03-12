/* eslint-disable no-mixed-spaces-and-tabs */
import ReactFlow, { ReactFlowProvider, useNodesState } from 'reactflow';
import { Button } from 'antd';
import { useState } from 'react';

import 'reactflow/dist/style.css';

import simpleData from './data/simpleData';
import { calcVerticalNode, getNodesList } from './utils/convert';
import { ORG_TYPE } from './constants/reactflow';
import { flattenArray } from './utils/common';

// Mỗi node có children chia theo chiều đọc cần được tính là 1 node lớn
// Tính size của node lơn bằng cách đếm độ sâu -> Tính width, height
// Apply vào d3-treeflex từ root (HDQT)

const OrgChart = () => {
	const [nodesData, setNodesData] = useState([]);

	const [nodes, setNodes, onChangeNodes] = useNodesState([]);

	return (
		<ReactFlowProvider>
			<div style={{ width: '100vw', height: '100vh' }}>
				<Button
					onClick={() => {
						let arr = [];
						getNodesList(simpleData, ORG_TYPE.VERTICAL).each((node) => {
							console.log('🚀 ~ getNodesList ~ node:', node);

							arr = [
								...arr,
								{
									...node,
									...node.data,
									position: { x: node.x + 500, y: node.y + 100 }
								}
							];
							// setNodes((prev) => {
							// 	return [
							// 		...prev,
							// 		{
							// 			...node,
							// 			...node.data,
							// 			position: {
							// 				x: node.x + 500,
							// 				y: node.y + 100
							// 			}
							// 		}
							// 	];
							// });
						});
					}}
				>
					nodesData
				</Button>
				<Button
					onClick={() => {
						console.log(
							flattenArray(
								nodes
									.filter((item) => item.isSubRoot)
									.map((item) =>
										calcVerticalNode(item, item?.position?.x, item?.position?.y)
									)
							)
						);
					}}
				>
					nodes
				</Button>
				<ReactFlow
					nodes={
						nodes?.length
							? [
									...nodes,
									...flattenArray(
										nodes
											.filter((item) => item.isSubRoot)
											.map((item) =>
												calcVerticalNode(
													item,
													item?.position?.x,
													item?.position?.y
												)
											)
									).filter((item) => !item.data.isSubRoot)
							  ]
							: []
					}
					edges={[]}
				/>
			</div>
		</ReactFlowProvider>
	);
};

export default OrgChart;
