import { useState, useRef } from "react";
import { Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList} from "@mui/material";
import {ArrowDropDownCircle} from "@mui/icons-material";

import './todoButtons.scss';

const options = [
	{name: 'Текущие дела', label: 'current'},
	{name: 'Завершенные дела', label: 'completed'},
	{name: 'Удаленные', label: 'deleted'},
];

const TodoButtons = (props) => {
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const anchorRef = useRef(null);

	const handleClick = (event, index) => {
		setSelectedIndex(index);
		setOpen(false);
	}

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	}

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	}

	return (
		<div className="buttons">
			<ButtonGroup onClick={handleToggle} variant="contained" ref={anchorRef} aria-label="split button">
				<Button>{options[selectedIndex].name}</Button>
				<Button
					size="small"
					aria-controls={open ? 'split-button-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-label="select merge strategy"
					aria-haspopup="menu"
				>
				<ArrowDropDownCircle />
				</Button>
			</ButtonGroup>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
				<Grow
					{...TransitionProps}
					style={{
						transformOrigin:
							placement === 'bottom' ? 'center top' : 'center bottom',
					}}
				>
					<Paper>
					<ClickAwayListener onClickAway={handleClose}>
						<MenuList id="split-button-menu">
							{options.map((option, index) => (
								<MenuItem
								key={option.name}
								selected={index === selectedIndex}
								onClick={(event) => {handleClick(event, index); props.onFilterSelect(option.label)}}
								>
								{option.name}
								</MenuItem>
							))}
						</MenuList>
					</ClickAwayListener>
					</Paper>
				</Grow>
				)}
			</Popper>
		</div>
	)
}

export default TodoButtons;