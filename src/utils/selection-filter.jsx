export default function selectionFilter({ series, films }) {
	return {
		// Series
		series: [
			{ title: 'Crime', data: series.filter((item) => item.genre === 'crime') },
			{
				title: 'Documentaries',
				data: series.filter((item) => item.genre === 'documentaries')
			},
			{
				title: 'Comedies',
				data: series.filter((item) => item.genre === 'comedies')
			},
			{
				title: 'Children',
				data: series.filter((item) => item.genre === 'children')
			},
			{
				title: 'Feel Good',
				data: series.filter((item) => item.genre === 'feel-good')
			}
		],

		// Films
		films: [
			{
				title: 'Suspense',
				data: films.filter((item) => item.genre === 'suspense')
			},
			{
				title: 'Children',
				data: films.filter((item) => item.genre === 'children')
			},
			{ title: 'Drama', data: films.filter((item) => item.genre === 'drama') },
			{
				title: 'Thriller',
				data: films.filter((item) => item.genre === 'thriller')
			},
			{
				title: 'Romance',
				data: films.filter((item) => item.genre === 'romance')
			}
		]
	};
}
