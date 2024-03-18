import { Handle, Position } from 'reactflow';

const Node = ({ data }) => {
	console.log('🚀 ~ Node ~ data:', data);
	return (
		<div>
			<div>{data?.name}</div>
			<Handle
				type="target"
				position={data?.isVerical ? Position.Left : Position.Top}
				isConnectable={false}
			/>
			<Handle type="source" position={Position.Bottom} isConnectable={false} />
		</div>
	);
};

export default Node;
