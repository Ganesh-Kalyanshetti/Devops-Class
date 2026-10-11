import java.util.Arrays;

class Sort
{

    public static void selectionSort(int[] a) {
        for(int i=0;i<a.length;i++)
        {
            int min = i;
            for(int j=i+1;j<a.length;j++)
            {   
                if(a[j]<a[min])
                {
                    min = j;
                }
            }

            int temp = a[i];
            a[i] = a[min];
            a[min] = temp; 

        }

        System.out.println("Sorted Array of A "+Arrays.toString(a));   
    }
    
    public static void bubblesort(int[] a) {
        
        for(int i=0;i<a.length;i++)
        {
            for(int j=0;j<a.length-1;j++)
            {
                if(a[j]>a[j+1])
                {
                    int temp = a[j];
                    a[j] = a[i];
                    a[i] = temp;
                }
            }
        }
        System.out.println("Sorted Array of B "+Arrays.toString(a));

    }   
    
    public static void insertionSort(int[] a){
        for(int i=0;i<a.length;i++)
        {
            int j=i;
            while(j >0 && a[j-1] > a[j])
            {
                int temp = a[j-1];
                a[j-1] =a[j];
                a[j]=temp;
                j--;
            }
        }
        System.out.println("Sorted Array of C "+Arrays.toString(a));

    }
    
     public static void merge(int a[],int low,int mid,int high) {

        int l = low;
        int r = mid+1;
        int k=0;
        int []temp = new int[high-low+1];

        while(l<=mid && r<=high)
        {
            if(a[l]<=a[r])
            {
                temp[k++] = a[l++];
            }
            else
            {
                temp[k++] = a[r++];
            }
        }

        while(l<=mid)
        {
            temp[k++] = a[l++];
        }
        while(r<=high)
        {
            temp[k++] = a[r++];
        }

        for(int i=0;i<temp.length;i++)
        {
            a[low+i] = temp[i];

        }

    }

    public static void mergeSort(int a[],int low,int high) {
        
        if(low>=high)
        {
            return;
        }

        int mid = (low+high)/2;

        mergeSort(a, low, mid);
        mergeSort(a, mid+1,high);
        merge(a,low,mid,high);

    }
   
    public static void main(String[] args) 
    {
        int a[] = {10,22,45,5,12,0};
        int b[] = a.clone();
        int c[] = a.clone();
        int d[] = a.clone();

        System.out.println("The is array A "+Arrays.toString(a));

        selectionSort(a);
        
        System.out.println("The is array B "+Arrays.toString(b));

        bubblesort(b);

        System.out.println("The is array C "+Arrays.toString(c));

        insertionSort(c);

        System.out.println("The is array D "+Arrays.toString(d));

        mergeSort(d,0,d.length-1);

        System.out.println("Sorted Array of D "+Arrays.toString(d));

    }   
}
