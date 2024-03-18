/* eslint-disable no-mixed-spaces-and-tabs */
import ReactFlow, {
	MarkerType,
	ReactFlowProvider,
	useNodesState
} from 'reactflow';
import { Button, Select } from 'antd';
import { useState } from 'react';

import 'reactflow/dist/style.css';

import simpleData from './data/simpleData';
import { getNodesList } from './utils/convert';
import { ORG_TYPE } from './constants/reactflow';
import { flattenArray } from './utils/common';
import ProcessEdge from './components/ProcessEdge';
import Node from './components/Node';

// Mỗi node có children chia theo chiều đọc cần được tính là 1 node lớn
// Tính size của node lơn bằng cách đếm độ sâu -> Tính width, height
// Apply vào d3-treeflex từ root (HDQT)

const nodeTypes = { node: Node };
const edgeTypes = { edge: ProcessEdge };

const OrgChart = () => {
	const [type, setType] = useState(ORG_TYPE.HORIZONTAL);

	const [nodes, setNodes, onChangeNodes] = useNodesState([]);

	return (
		<ReactFlowProvider>
			<div style={{ width: '100vw', height: '100vh' }}>
				<Button
					onClick={() => {
						setNodes(
							getNodesList(simpleData, type).map((item) => ({
								...item,
								type: 'node'
							}))
						);
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

				<ReactFlow
					nodeTypes={nodeTypes}
					edgeTypes={edgeTypes}
					nodes={nodes?.length ? nodes : []}
					edges={[
						{
							id: '0-1-1',
							source: 'PB1',
							target: 'PB1.1',
							type: 'edge',
							markerEnd: {
								type: MarkerType.ArrowClosed,
								width: 20,
								height: 20,
								color: '#FF0072'
							},
							style: {
								strokeWidth: 2,
								stroke: '#FF0072'
							}
						},
						{
							id: '0-1-2',
							source: 'HDQT-lv0',
							target: 'HDQT-lv1.2',
							type: 'edge'
						}
					]}
				/>
			</div>
		</ReactFlowProvider>
	);
};

export default OrgChart;
