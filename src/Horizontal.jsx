import { ReactFlowProvider, useNodesState } from 'reactflow';
import { flextree } from 'd3-flextree';
import { Button } from 'antd';
import ReactFlow from 'reactflow';

import 'reactflow/dist/style.css';
import { useState } from 'react';

const initialNodes = [
	{ id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
	{ id: '2', position: { x: 0, y: 100 }, data: { label: '2' } }
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const data = {
	id: 'HDQT',
	data: { label: 'HDQT' },
	children: [
		{
			id: 'BKS',
			data: { label: 'BKS' }
		},
		{
			id: 'BGD',
			data: { label: 'BGD' },
			children: [
				{
					id: 'PB1',
					data: { label: 'PB1' },
					children: [
						{
							id: 'PB1.1',
							data: { label: 'PB1.1' }
						},
						{
							id: 'PB1.2',
							data: { label: 'PB1.2' }
						},
						{
							id: 'PB1.3',
							data: { label: 'PB1.3' }
						}
					]
				},
				{
					id: 'PB2',
					data: { label: 'PB2' }
				},
				{
					id: 'PB3',
					data: { label: 'PB3' }
				}
			]
		}
	]
};

const OrgChart = () => {
	const [nodesData, setNodesData] = useState([]);

	const [nodes, setNodes, onChangeNodes] = useNodesState([]);

	const layout = flextree();
	const tree = layout.spacing(60).nodeSize([200, 100]).hierarchy(data);

	return (
		<ReactFlowProvider>
			<div style={{ width: '100vw', height: '100vh' }}>
				<Button
					onClick={() => {
						console.log(tree);
					}}
				>
					tree
				</Button>
				<Button
					onClick={() => {
						console.log(layout(tree));
					}}
				>
					layout
				</Button>
				<Button
					onClick={() => {
						layout(tree).each((node) =>
							setNodesData((prev) => [...prev, node])
						);
					}}
				>
					nodesData
				</Button>
				<Button
					onClick={() => {
						setNodes(
							nodesData.map((item, index) => ({
								...item,
								...item.data,
								position: {
									x: item.x + 500,
									y: item.y + 100
								}
							}))
						);
					}}
				>
					setNodes
				</Button>
				<Button
					onClick={() => {
						console.log(tree.x);
					}}
				>
					nodes
				</Button>
				<ReactFlow nodes={nodes} edges={[]} />
			</div>
		</ReactFlowProvider>
	);
};

export default OrgChart;
