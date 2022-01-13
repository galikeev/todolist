import { useState, useRef } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const options = ['Текущие дела', 'Завершенные дела', 'Удаленные'];

const TodoButtons = () => {
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
		<>
			<ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
				<Button>{options[selectedIndex]}</Button>
				<Button
					size="small"
					aria-controls={open ? 'split-button-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-label="select merge strategy"
					aria-haspopup="menu"
					onClick={handleToggle}
				>
				<ArrowDropDownIcon />
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
								key={option}
								selected={index === selectedIndex}
								onClick={(event) => handleClick(event, index)}
								>
								{option}
								</MenuItem>
							))}
						</MenuList>
					</ClickAwayListener>
					</Paper>
				</Grow>
				)}
			</Popper>
		</>
	)
}

export default TodoButtons;