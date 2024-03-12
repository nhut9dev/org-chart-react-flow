/* eslint-disable no-mixed-spaces-and-tabs */
import { flextree } from 'd3-flextree';

import { COMMON, ORG_TYPE } from '../constants/reactflow';
import NODE from '../constants/node';
import { flattenArray } from './common';

const calcVerticalNode = (obj, x = 0, y = 0, deep = 0) => {
	const newX = x + NODE.WIDTH / 6;
	const newY = y + NODE.HEIGHT * deep;

	let childrenDeep = 1;
	if (!obj) {
		return null;
	}
	return {
		id: obj.id,
		data: obj?.data?.isSubRoot
			? obj.data
			: {
					...obj,
					label: obj.name
			  },
		position: obj?.data?.isSubRoot
			? obj.position
			: {
					x: newX,
					y: newY
			  },
		...(obj?.data?.children?.length || obj?.children?.length
			? {
					children: (obj?.data?.children || obj?.children).map((c, index) => {
						const prevObj = flattenArray([
							(obj?.data?.children || obj?.children)?.[index - 1]
						]);

						if (prevObj?.[0]) {
							childrenDeep += prevObj.length;
						}

						return calcVerticalNode(
							c,
							obj?.data?.isSubRoot ? x : newX,
							obj?.data?.isSubRoot ? y : newY,
							childrenDeep
						);
					})
			  }
			: {})
	};
};

const convertData = (obj, type = ORG_TYPE.HORIZONTAL) => {
	return {
		id: obj.id,
		data: {
			...obj,
			label: obj.name
		},
		...(obj?.children?.length
			? {
					children: obj.children.map((c) =>
						type === ORG_TYPE.VERTICAL && c.isMain
							? {
									id: c.id,
									data: { ...c, label: c.name },
									...(obj?.children?.length
										? {
												children: c.children.map((item) => ({
													id: item.id,
													data: { ...item, label: item.name },
													isSubRoot: true
												}))
										  }
										: {})
							  }
							: convertData(c, type)
					)
			  }
			: {})
	};
};

const getNodesList = (data, type = ORG_TYPE.VERTICAL) => {
	const d3FlexTree = flextree();

	const tree = d3FlexTree
		.spacing(COMMON.SPACING)
		.nodeSize([NODE.WIDTH, NODE.HEIGHT])
		.hierarchy(convertData(data, type));

	return d3FlexTree(tree);
};

export { getNodesList, calcVerticalNode };
