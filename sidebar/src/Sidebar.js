import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


class Sidebar extends Component{
    render() {
        return (
            <div className="sidebar">
                <List disablePadding dense>
                    {this.props.students.map((student) => (
                        <ListItem key={student.name} button style={{backgroundColor: student.color}}>
                            <ListItemText>
                                {student.label}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}
export default Sidebar