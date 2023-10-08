import * as React from "react"
import {RenderGrid} from "./RenderGrid"

export default function SettingsGrid(props) {
  return (
    <div>
      <RenderGrid
        data={props.data}
        config={props.config}
        nameTable={props.nameTable}
        rowHeight={100}
        visibleRows={3}
      />
    </div>
  )
}
