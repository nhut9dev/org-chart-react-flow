/* eslint-disable no-mixed-spaces-and-tabs */
import { flextree } from 'd3-flextree';

import { COMMON, ORG_TYPE } from '../constants/reactflow';
import NODE from '../constants/node';
import { flattenArray } from './common';
import { withInfo } from 'antd/es/modal/confirm';

const convertToReactFlowData = (arr) => {
	return arr.map((node) => {
		return {
			id: node.data.id,
			data: {
				...node.data,
				label: node.data.name
			},
			position: {
				x: node.x,
				y: node.y
			}
		};
	});
};

const findHorizontal = (tree, prevIsMain = false) => {
	return {
		...tree,
		...(prevIsMain ? { isSubRoot: true } : {}),
		children:
			tree?.children && !prevIsMain
				? tree.children.map((c) => {
						return findHorizontal(c, !!tree?.isMain);
				  })
				: null
	};
};

const findSubRoot = (tree) => {
	return flattenArray([tree])
		.find((n) => n.isMain)
		.children.map((c) => {
			const d3FlexTree = flextree();
			const tree = d3FlexTree.nodeSize([NODE.WIDTH, NODE.HEIGHT]).hierarchy(c);
			const node = d3FlexTree(tree);
			return {
				...c,
				height: node.height,
				length: node.length,
				depth: node.depth
			};
		});
};

const calcVerticalD3Tree = (node, subRoots) => {
	const sub = subRoots.find((n) => n.id === node.id);

	return {
		...(sub ? { ...sub, isSubRoot: true } : {}),
		...node,
		id: node.id,
		size: sub
			? [((sub.height + 1) * NODE.WIDTH) / 2, NODE.HEIGHT]
			: [NODE.WIDTH, NODE.HEIGHT],
		children:
			node?.children && !sub
				? node.children.map((c) => {
						return calcVerticalD3Tree(c, subRoots);
				  })
				: null
	};
};

const getNodesList = (data, type = ORG_TYPE.VERTICAL) => {
	const d3FlexTree = flextree();
	let arr = [];

	if (type === ORG_TYPE.HORIZONTAL) {
		const tree = d3FlexTree
			.spacing(COMMON.SPACING)
			.nodeSize([NODE.WIDTH, NODE.HEIGHT])
			.hierarchy(data);
		d3FlexTree(tree).each((node) => {
			arr = [...arr, node];
		});
		return convertToReactFlowData(arr);
	}

	const horizontal = findHorizontal(data);

	const tree = d3FlexTree
		.spacing(COMMON.SPACING)
		.nodeSize([NODE.WIDTH, NODE.HEIGHT])
		.hierarchy(horizontal);

	d3FlexTree(tree).each((node) => {
		arr = [...arr, node];
	});

	const d3vertical = flextree();
	let arrVertical = [];

	const subRoots = findSubRoot(data);

	const treeVertical = d3vertical
		.spacing(COMMON.SPACING)
		.hierarchy(calcVerticalD3Tree(data, subRoots));

	d3vertical(treeVertical).each((node) => {
		arrVertical = [...arrVertical, node];
	});

	console.log('🚀 ~ d3vertical ~ arrVertical:', arrVertical);

	const nodes = convertToReactFlowData(arrVertical).map((item) => {
		const sub = subRoots.find((n) => n.id === item.data.id);

		return {
			...item,
			data: {
				...item.data,
				...(!!sub && sub?.children ? { children: sub?.children } : {})
			}
		};
	});

	console.log(nodes);

	return nodes;
};

export { getNodesList };
