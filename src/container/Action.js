import {
    CLICT_MORE,
    DELETE_BUTTON,
    TOP_BUTTON,
    MORE_DELETE,
    HANDLE_SHOWDIALOG,
    HANDER_ADD,
    CHECKED,
    DELETE_MORE_INDEX,
    HANDLE_CLOSE,
    DELETE_MORE
    } from "../const/actionType";
    
    function callState1(text) {
        return {
            type: CLICT_MORE,
            text
        }
    }

    function callDialog1(text) {
        return {
            type: DELETE_BUTTON,
            text
        }
    }
    function callDialog(text) {
        return {
            type: TOP_BUTTON,
            text
        }
    }
    function callShowCheck(text) {
        return {
            type:MORE_DELETE,
            text
        }
    }
    function callState2(text){
        return {
            type:HANDLE_SHOWDIALOG,
            text
        }
    }
    function callState3(text){
        return {
            type:HANDER_ADD,
            text
        }
    }
    function callShowCheck(text){
        return {
            type:MORE_DELETE,
            text
        }
    }
    function calldelete(text){
        return {
            type:CHECKED,
            text
        }
    }
    function calldelete1(text){
        return {
            type:DELETE_MORE_INDEX,
            text
        }
    }
    function callClose(text){
        return {
            type:HANDLE_CLOSE,
            text
        }
    }
    function deleteArr(text){
        return {
            type:DELETE_MORE_INDEX,
            text
        }
    }

    
    export {
        callState1,
        callDialog1,
        callDialog,
        callShowCheck,
        callState2,
        callState3,
        calldelete,
        calldelete1,
        callClose,
        deleteArr,
    }