var canPlaceFlowers=function(flowerbed,n)
{
    var count=0;
    if(n==0)
        {
            return true;
        }
    for(var i=0; i<flowerbed.length;i++)
        {
                if( (flowerbed[i]==0) && 
                   (flowerbed[i-1]==0 || i==0) &&
                   (flowerbed[i+1] === undefined || flowerbed[i+1] == 0 ) )
                {
                    flowerbed[i]=1;
                    count++;
                }
            if(n==count)
                {
                    return true;
                }
            
        }
    return false;
    
     
}
console.log(canPlaceFlowers([0,0,0,0,0,1,0,0],1));
