import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Box from '@mui/material/Box'
import _ from 'lodash'

export function RenderGrid({ data, rowHeight, visibleRows, config, nameTable }) {
	const nameOField = nameTable == 'Movies' ? 'Trailer' : 'Name'

	function CellComponent({ ...props }) {
		const Cell = config.find((config1) => config1.field === nameOField).component
		return <Cell {...props} />
	}

	const rootRef = React.useRef()
	const [start, setStart] = React.useState(0)

	function getTopHeight() {
		return rowHeight * start
	}
	function getBottomHeight() {
		return rowHeight * (data.length - (start + visibleRows + 1))
	}

	React.useEffect(() => {
		function onScroll(e) {
			setStart(
				Math.min(data.length - visibleRows - 1, Math.floor(e.target.scrollTop / rowHeight)),
			)
		}

		rootRef.current.addEventListener('scroll', onScroll)

		return () => {
			rootRef.current.removeEventListener('scroll', onScroll)
		}
	}, [data.length, visibleRows, rowHeight])

	return (
		<Box style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }} ref={rootRef}>
			<Box style={{ height: getTopHeight() }} />

			<Table
				sx={{ minWidth: nameTable == 'Movies' ? 3000 : 100 }}
				size='small'
				aria-label='a dense table'
			>
				<TableHead sx={{ display: start != '0' ? 'none' : 'table-header-group' }}>
					<TableRow>
						{_.map(Object.values(config), function (value, colIndex) {
							return (
								<TableCell key={value + colIndex}>
									{Object.values(value)[1]}
								</TableCell>
							)
						})}
					</TableRow>
				</TableHead>

				<TableBody>
					{data.slice(start, start + visibleRows + 1).map((row, rowIndex) => (
						<TableRow style={{ height: rowHeight }} key={start + rowIndex}>
							{_.map(Object.values(row), function (value, colIndex) {
								if (value == row.Trailer || value == row.name) {
									return (
										<TableCell key={start + '' + rowIndex + colIndex}>
											<CellComponent data={value} />
										</TableCell>
									)
								} else {
									return (
										<TableCell key={start + '' + rowIndex + colIndex}>
											{value}
										</TableCell>
									)
								}
							})}
						</TableRow>
					))}
				</TableBody>
			</Table>

			<Box style={{ height: getBottomHeight() }} />
		</Box>
	)
}