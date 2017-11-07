//求数组的最大值
//参数：数组
//返回值:数组的最大值
function arrMax(arr){
	var  max=arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]>max){
			max=arr[i];
		}
	}
	return max;
}

//求数组的最大值
//参数：数组
//返回值:数组的最大值和最大值对应的下标组成的数组
function arrMaxAndIndex(arr){
	var  max=arr[0],index=0;
	for(var i=1;i<arr.length;i++){
		if(arr[i]>max){
			max=arr[i];
			index=i;
		}
	}
	var arrReturn=[max,index];
	return arrReturn;
}

// 求数组的所有数的和
//参数：数组
//返回值：数组所有元素的和
function arrSum(arr){
	var sum=0;
	for(var x in arr){
		sum+=arr[x];
	}
	return sum;
}

// 求数组的所有数的平均值
//参数：数组
//返回值：数组所有元素的平均值
function arrAvg(arr){
	var avg=arrSum(arr)/arr.length;
	return avg;
}

//查找数组中是否存在某个元素
//参数：数组，需要查找的元素
//返回值：true（存在） false（不存在）
function arrHas(arr,n){
	for(var x in arr){
		if(arr[x]==n){
			return true;
		}
	}
	return false;
}

//数组去重
//参数：数组
//返回值：去重后的数组
//方法一：思路：把原来 数组的每一个元素与新的没有重复元素的数组对比，新数组中没有这个数的时候就把这个元素存储到新数组中
function noRepeat(arr){
	var arr1=[];
	for(var x in arr){
		if(arrHas(arr1,arr[x])==false){
			arr1.push(arr[x]);
		}
	}
	return arr1;	
}

//方法二：思路：把原来数组中重复的数删除，剩下的即为没有重复数字的数组
function noRepeat1(arr){
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[j]==arr[i]){
				arr.splice(j,1);//splice(index,num,add1,add2,……,addn)从第index的下标开始，删除num个数，并且在index的位置添加num后面的数据
				j--;//防止有连续重复的数据，不能完全删除。（因为删除一个元素后，后面的元素前移，所以j需要减一）
			}
		}
	}
	return arr;
}

//数组中的数据从小到大排序
//参数：数组
//返回值：按顺序排序的数组
//方法一：选择排序（把最大的往后面放，后面的先放到原来最大的数的位置）
function arrSort1(arr){
	var max,temp,index;
	for(var i=0;i<arr.length;i++){
		max=arr[0];
		index=0;
		for(var j=0;j<arr.length-i;j++){
			if(arr[j]>max){
				max=arr[j];
				index=j;
			}	
		}
		/*
		temp=arr[arr.length-1-i];
		arr[arr.length-1-i]=max;
		arr[index]=temp;
		*/
		arr[index]=arr[arr.length-1-i];
		arr[arr.length-1-i]=max;
	}
	return arr;//也可以不写返回值，因为数组已经改变了
}

//数组中的数据从大到小排序
//参数：数组
//返回值：按顺序排序的数组
//方法一：选择排序（把最小的往后面放，后面的先放到原来最大的数的位置）
function arrSort_1(arr){
	var min,temp,index;
	for(var i=0;i<arr.length;i++){
		min=arr[0];
		index=0;
		for(var j=0;j<arr.length-i;j++){
			if(arr[j]<min){
				min=arr[j];
				index=j;
			}	
		}
		/*
		temp=arr[arr.length-1-i];
		arr[arr.length-1-i]=max;
		arr[index]=temp;
		*/
		arr[index]=arr[arr.length-1-i];
		arr[arr.length-1-i]=min;
	}
	return arr;//也可以不写返回值，因为数组已经改变了
}


//总结从大到小和从小到大的区别就在于arr[j]<min还是arr[j]>min，也就是arr[j]-min的正负问题，可以用一个函数判断；
//排序时的大小顺序决定函数
//参数：需要比较的两个数 a,b,BToS(从大到小)或SToB(从小到大)
//返回值:true(从大到小排序) false（从小到大排序）
function sortOrder(a,b,trueOrFalse){
	/*
	if(trueOrFalse==false){    
		return a-b;	
	}else if(trueOrFalse==true){
		return b-a;
	}else{
		return a-b;	//默认从小到大
	}
	*/
	if(trueOrFalse==true){
		return b-a;
	}
	return a-b;
}

//数组万能排序：从大到小或着从小到大
//参数：数组，true/false.(注：true(从大到小排序)，false（从小到大排序），不写这个参数时默认为从小到大排序)
//返回值：排好序的数组。
function arrSort(arr,trueOrFalse){
	var max,temp,index;
	for(var i=0;i<arr.length;i++){
		max=arr[0];
		index=0;
		for(var j=0;j<arr.length-i;j++){
			if(sortOrder(arr[j],max,trueOrFalse)>0){
				max=arr[j];
				index=j;
			}	
		}
		arr[index]=arr[arr.length-1-i];
		arr[arr.length-1-i]=max;
	}
	return arr;//也可以不写返回值，因为数组已经改变了
}

//用二分法查找arr中是否含有k元素；
//参数:arr（查找范围）  k(需要查找的数)
//返回值:mid值(找到了，位置是mid) -1(没有找到)
function arrFind(arr,k){
	var low=0;
	var high=arr.length-1;
	var mid;
	for(;low<=high;){
		mid=parseInt((low+high)/2);
		if(k<arr[mid]){
			high=mid-1;
		}else if(k>arr[mid]){
			low=mid+1;
		}else{//k==arr[mid]	找到了，就是mid对应的下标的位置
			break;
		}
	}
	if(low<=high){
		return mid;
	}
	return -1;
}