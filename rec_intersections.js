/* Check if one rectangle contains another 
** Input: Two recs Structures with: 
* the (x,y) coordinates of the top-left vertice and the size (width, height) 
* from the rec instances
** Output: True or False depending whether the recs contains each other or not 
*/
function contains(Rec1, Rec2)
{
    // Top-left corner coordinates of the rectangles
    Rec1_x1 = Rec1.x, Rec1_y1 = Rec1.y;
    Rec2_x1 = Rec2.x, Rec2_y1 = Rec2.y;
    
    // Bottom-right corner coordinates of the rectangles
    Rec1_x2 = Rec1.x + Rec1.width, Rec1_y2 = Rec1.y + Rec1.height;
    Rec2_x2 = Rec2.x + Rec2.width, Rec2_y2 = Rec2.y + Rec2.height;
    return !(        
            Rec2_x1 < Rec1_x1 ||
            Rec2_y1 < Rec1_y1 ||
            Rec2_x2 > Rec1_x2 ||
            Rec2_y2 > Rec1_y2
    );
}

/* Check if the rectangles Rec1 and Rec2 overlaps each other or not 
** Input: Two recs Structures with: 
* the (x,y) coordinates of the top-left vertice and the size (width, height) 
* from the rec instances
** Output: True or False depending whether the recs overlaps each other or not 
*/
function overlaps(Rec1, Rec2)
{
    // Top-left corner coordinates of the rectangles
    Rec1_x1 = Rec1.x, Rec1_y1 = Rec1.y;
    Rec2_x1 = Rec2.x, Rec2_y1 = Rec2.y;
    
    // Bottom-right corner coordinates of the rectangles
    Rec1_x2 = Rec1.x + Rec1.width, Rec1_y2 = Rec1.y + Rec1.height;
    Rec2_x2 = Rec2.x + Rec2.width, Rec2_y2 = Rec2.y + Rec2.height;
    
    // no horizontal overlap
    if (Rec1_x1 >= Rec2_x2 || Rec2_x1 >= Rec1_x2) return false;
    // no vertical overlap
    if (Rec1_y1 >= Rec2_y2 || Rec2_y1 >= Rec1_y2) return false;

}

/* Check if the rectangle 1 touches rectangle 2
** Input: Two recs Structures with: 
* the (x,y) coordinates of the top-left vertice and the size (width, height) 
* from the rec instances
** Output: True or False depending whether the recs touches each other or not 
*/
function touches(Rec1, Rec2) 
{
    // Top-left corner coordinates of the rectangles
    Rec1_x1 = Rec1.x, Rec1_y1 = Rec1.y;
    Rec2_x1 = Rec2.x, Rec2_y1 = Rec2.y;
    
    // Bottom-right corner coordinates of the rectangles
    Rec1_x2 = Rec1.x + Rec1.width, Rec1_y2 = Rec1.y + Rec1.height;
    Rec2_x2 = Rec2.x + Rec2.width, Rec2_y2 = Rec2.y + Rec2.height;
    
    // has horizontal gap
	if (Rec1_x1 > Rec2_x2 || Rec2_x1 > Rec1_x2) return false;

	// has vertical gap
	if (Rec1_y1 > Rec2_y2 || Rec2_y1 > Rec1_y2) return false;
    return true;
    
}

// Check if there are any kind of intersection of two recs 
function intersection(Rec1, Rec2) 
{
    if (contains(Rec1, Rec2) || overlaps(Rec1, Rec2) || touches(Rec1, Rec2))
        return true;
    else
        return false;
}
