export const flattenArray = (array, childrenKey = 'children') => {
	return (array || []).reduce((acc, e) => {
		if (Array.isArray(e?.[childrenKey])) {
			return acc.concat(e, flattenArray(e[childrenKey]));
		}
		return acc.concat(e);
	}, []);
};
