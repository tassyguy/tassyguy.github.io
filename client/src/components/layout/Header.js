import React, { Component } from "react"
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarFixedAdjust,
  TopAppBarTitle,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
} from "@rmwc/top-app-bar"
import { MenuSurfaceAnchor, Menu, MenuItem } from "@rmwc/menu"
import "@rmwc/menu/styles"
import { Button } from "@rmwc/button"
import { ListDivider } from "@rmwc/list"

import "@rmwc/top-app-bar/styles"
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
export default class Header extends Component {
  render() {
    return (
      <header>
        <TopAppBar short>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarNavigationIcon icon="menu" onClick={this.handleClick}>
                <NavMenu />
              </TopAppBarNavigationIcon>

              <TopAppBarTitle>Short</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon="favorite" />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
        <div style={{ height: "100rem", padding: "1rem" }}>Scroll Me</div>
      </header>
    )
  }
}
