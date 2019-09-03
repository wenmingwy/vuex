import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:[1,2,3,4,5]
    },
    getters:{
        getCount:function(state){
            return state.count;
        },
        getCountByIndex:function(state){
            return function (index){
                return state.count[index-1];
                }
        }
    },
    mutations: {
        updateCountByIndex:function(state,data){
            let  oldCount = state.count;
            oldCount[data.index-1]+=data.value;
            state.count = [];
            for(let i=0;i<oldCount.length;i++){
                state.count.push(oldCount[i]);
            }
        },
        popState(state){
            state.count.pop();
        },
        pushState(state,num){
            state.count.push(num);
        }
      }
});
export default store;