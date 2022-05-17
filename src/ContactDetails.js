import React from 'react';
import {View , Text , StyleSheet} from 'react-native';

const ContactDetails = () => {
    return(
        <View>
           
            <Text style={styles.HeaderText}>Mohd Aasim</Text>
            <Text style={styles.childText}>aasimbdn@gmail.com</Text>
            <Text style={styles.ActivityText}>Last Activity: 12-Mar-2022</Text>
            <View>
            <Text style={styles.AboutText}>About</Text>
            <View style={styles.aboutBorder}>

            </View>
            </View>

            <View>
            <Text style={styles.TimelineText}>Timeline</Text>
            <View style={styles.timelineBorder}>

            </View>
            </View>

            <View>
            <Text style={styles.NotesText}>Notes</Text>
            <View style={styles.notesBorder}>

            </View>
            </View>

            <View>
            <Text style={styles.PhoneText}>Phone Calls</Text>
            <View style={styles.phoneBorder}>

            </View>
            </View>

            <View>
            <Text style={styles.TaskText}>Tasks</Text>
            <View style={styles.taskBorder}>

            </View>
            </View>

            <View>
            <Text style={styles.RelationText}>Relations</Text>
            <View style={styles.relationBorder}>

            </View>
            </View>

        </View>
            
    )

}
            
            
           
export default ContactDetails;

const styles=StyleSheet.create({
    HeaderText:{
        color: 'black',
        fontFamily: "IBMPlexSans-SemiBold",
        fontSize: 30,
        fontWeight: '800',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',  
        marginTop:70,
        marginLeft:28,
        marginRight:162,
    },
        
    childText: {
        color: 'black',
        fontFamily: "IBMPlexSans-Light",
        fontSize: 20,
        fontWeight: '300',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign:'left',
        textAlignVertical:'top',
        marginLeft:28,
        lineHeight:20,
        paddingTop:4
    },

    ActivityText:{
        color: 'black',
        fontFamily: "IBMPlexSans-Light",
        fontSize: 18,
        fontWeight: '300',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign:'left',
        marginLeft:28,
        paddingTop:4
    },
        
        
    AboutText:{
        paddingLeft:35,
        opacity: 1,
        color: 'black',
        fontFamily: "IBMPlexSans-Light",
        fontSize: 21,
        fontWeight: '300',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        lineHeight: 24,
        marginTop:38,
    },
    
    aboutBorder:{
        borderBottomWidth: 1, 
        color:'gray',
        opacity: 1,
        marginLeft:34,
        marginRight:34,
        paddingBottom:14,
        
    },
        
        

    TimelineText:{
        paddingLeft:35,
        opacity: 1,
        color: '#000000',
        fontFamily: "IBMPlexSans-Light",
        fontSize: 21,
        fontWeight: '300',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        lineHeight: 24,
        paddingTop:28,
        
    },

    timelineBorder:{
        borderBottomWidth: 1, 
        color:'grey',
        opacity: 1,
        marginLeft:34,
        marginRight:34,
        paddingBottom:14
        


    },

    NotesText:{
        paddingLeft:35,
        opacity: 1,
        color: '#000000',
        fontFamily: "IBMPlexSans-Light",
        fontSize: 21,
        fontWeight: '300',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        lineHeight: 24,
        paddingTop:28,
    },

    notesBorder:{
        borderBottomWidth: 1, 
        color:'grey',
        opacity: 1,
        marginLeft:34,
        marginRight:34,
        paddingBottom:14


    },

    PhoneText:{
        paddingLeft:35,
        opacity: 1,
        color: '#000000',
        fontFamily: "IBMPlexSans-Light",
        fontSize: 21,
        fontWeight: '300',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        lineHeight: 24,
        paddingTop:28,
    },

    phoneBorder:{
        borderBottomWidth: 1, 
        color:'grey',
        opacity: 1,
        marginLeft:34,
        marginRight:34,
        paddingBottom:14


    },

    TaskText:{
        paddingLeft:35,
        opacity: 1,
        color: '#000000',
        fontFamily: "IBMPlexSans-Light",
        fontSize: 21,
        fontWeight: '300',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        lineHeight: 24,
        paddingTop:28,
    },

    taskBorder:{
        borderBottomWidth: 1, 
        color:'grey',
        opacity: 1,
        marginLeft:34,
        marginRight:34,
        paddingBottom:14


    },

    RelationText:{
        paddingLeft:35,
        opacity: 1,
        color: '#000000',
        fontFamily: "IBMPlexSans-Light",
        fontSize: 21,
        fontWeight: '300',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        lineHeight: 24,
        paddingTop:28,
        
    },

    relationBorder:{
        borderBottomWidth: 1, 
        color:'gray',
        opacity: 1,
        marginLeft:34,
        marginRight:34,
        paddingBottom:14

    },

});


    
    


        
            
        


        
           
        

        
        

        
        

        
        
        
        


        
        
       
        
        

        
   
        
        
        
       
        


        
        
        

        
        
        
        
        
        
        
        


