import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors';

export default class Header extends React.Component {
	static defaultProps = {
		title: 'Header Title'
	};
	render() {
		if(this.props.type === "auth"){
			return (
				<View>
					<View style={[styles.container, this.props.style]}>
						<View style={styles.backAndTitleContainer}>
							{this.props.leftAction}
						</View>
						<View style={styles.headerStyle}>
							<Text style={styles.headerTitleStyle}>{this.props.title}</Text>
						</View>
						<View style={{}}>
							{this.props.rightAction}
						</View>
					</View>
				
				</View>
			);
		}else if(this.props.type === "App"){
			return (
				<View>
					<View style={[styles.container, this.props.style]}>
						<View style={styles.backAndTitleContainer}>
							{this.props.leftAction}
						</View>
						<View style={{}}>
							{this.props.rightAction} 
						</View>
					</View>
						<View style={styles.Appheader}>
							<Text style={styles.headerTitleStyleApp}>{this.props.title}</Text>
						</View>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		alignItems: 'center'
	},
	tabHeaderContainer:{
		padding: 10,
	},
	backAndTitleContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	headerStyle:{
		alignItems:'flex-start',
		paddingHorizontal:30
	},
	header:{
		alignItems:'center'
	},
	Appheader:{
		padidng:10
	},
	headerTitleStyle: {
		fontSize:Fonts.t1,
		fontFamily:'Medium',
		letterSpacing:-0.2,
		textAlign:'center'
	},
	headerTitleStyleApp:{
		fontSize:Fonts.h1,
		fontFamily:'Bold',
		letterSpacing:-0.2,
		textAlign:'center'
	}
});
