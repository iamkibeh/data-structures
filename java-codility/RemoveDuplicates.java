public class RemoveDuplicates {

    public int removeDup(int[] arr){
        int n = arr.length;

        if(n<2) return n;

        int L =0;
        int R =1;

        while (R<n) {
            if(arr[L] != arr[R]){
                L++;
                arr[L] = arr[R];
            }
            R++;
        }


        return L+1;
    }
}

// 1,1,2
// 0,0,1,1,1,2,2,3,3,4
// 0,1,2,3,4,2,2,3,3,4
//         ^ 
//                     ^
// 0,1,2,3,4,5,6,7,8,9,10

// n = 10;