import React from "react"
import { MenuSurfaceAnchor, Menu, MenuItem } from "@rmwc/menu"
import "@rmwc/menu/styles"
import { Button } from "@rmwc/button"
import { ListDivider } from "@rmwc/list"

function NavMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <MenuSurfaceAnchor>
      <Menu
        open={open}
        onSelect={(evt) => console.log(evt.detail.index)}
        onClose={(evt) => setOpen(false)}
      >
        <MenuItem>Cookies</MenuItem>
        <MenuItem>Pizza</MenuItem>
        {/** MenuItem is just a ListItem, so you can intermingle other List components */}
        <ListDivider />
        <MenuItem>Icecream</MenuItem>
      </Menu>

      <Button raised onClick={(evt) => setOpen(!open)}>
        Menu
      </Button>
    </MenuSurfaceAnchor>
  )
}

export default NavMenu
