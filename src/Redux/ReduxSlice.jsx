import { createSlice } from '@reduxjs/toolkit'

//初始化
const initialState = {
    data:[],
    editingKey: ''
};

//定義 初始狀態、reducer函數、生成 reducers和 action
const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers:{
        //setData
        setData: (state, action)=>{
            state.data = action.payload;
        },
        //startEditing
        startEditing: (state, action)=>{
            state.editingKey = action.payload
        },
        //stopEditing
        stopEditing: (state) => {
            state.editingKey = '';
        },
        //saveRow
        saveRow: (state, action)=>{
            const {key, newRow} = action.payload    //從 action.payload 提取key & newRow 值
            const index = state.data.findIndex((item)=>item.key === key) //用findTndex去尋找相同key的行
            // 添加新的數據
            if (index >= 0) {
                state.data[index] = { ...state.data[index], ...newRow };
              }

            state.editingKey = '';
        },
    }
})

export const {setData, startEditing, stopEditing, saveRow} = tableSlice.actions;
export default tableSlice.reducer;