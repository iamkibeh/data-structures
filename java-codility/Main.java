public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        RemoveDuplicates removeDuplicates = new RemoveDuplicates();
        System.out.println(removeDuplicates.removeDup(new int[] { 0,0,1,1,1,2,2,3,3,4}));
    }
}

class RemoveDuplicates {

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


        return L + 1;
    }
}