/* eslint-disable no-mixed-spaces-and-tabs */
import ReactFlow, { ReactFlowProvider, useNodesState } from 'reactflow';
import { Button, Select } from 'antd';
import { useState } from 'react';

import 'reactflow/dist/style.css';

import simpleData from './data/simpleData';
import { getNodesList } from './utils/convert';
import { ORG_TYPE } from './constants/reactflow';
import { flattenArray } from './utils/common';

// Mỗi node có children chia theo chiều đọc cần được tính là 1 node lớn
// Tính size của node lơn bằng cách đếm độ sâu -> Tính width, height
// Apply vào d3-treeflex từ root (HDQT)

const OrgChart = () => {
	const [type, setType] = useState(ORG_TYPE.HORIZONTAL);

	const [nodes, setNodes, onChangeNodes] = useNodesState([]);

	return (
		<ReactFlowProvider>
			<div style={{ width: '100vw', height: '100vh' }}>
				<Button
					onClick={() => {
						setNodes(getNodesList(simpleData, type));
					}}
				>
					Render
				</Button>
				<Select
					value={type}
					onChange={(value) => {
						setType(value);
					}}
					options={[
						{ label: 'Ngang', value: ORG_TYPE.HORIZONTAL },
						{ label: 'Dọc', value: ORG_TYPE.VERTICAL }
					]}
				/>

				<ReactFlow nodes={nodes?.length ? nodes : []} edges={[]} />
			</div>
		</ReactFlowProvider>
	);
};

export default OrgChart;
