initSidebarItems({"enum":[["MeshLine","Represent a coordinate mesh for the two ranged value coordinate system"]],"fn":[["make_partial_axis",""]],"struct":[["LogCoord","A log scaled coordinate axis"],["LogRange","The wrapper type for a range of a log-scaled value"],["RangedCoord","The coordinate described by two ranged value"],["RangedCoordf32","The ranged coordinate for type f32"],["RangedCoordf64","The ranged coordinate for type f64"],["RangedCoordi32","The ranged coordinate for type i32"],["RangedCoordi64","The ranged coordinate for type i64"],["RangedCoordu32","The ranged coordinate for type u32"],["RangedCoordu64","The ranged coordinate for type u64"],["RangedDate","The ranged coordinate for date"],["RangedDateTime","The ranged coordinate for the date and time"],["Shift","The coordinate translation that only impose shift"],["ShiftAndTrans","We can compose an abitray transformation with a shift"]],"trait":[["AsRangedCoord","The trait for the type that can be converted into a ranged coordinate axis"],["CoordTranslate","The trait that translates some customized object to the backend coordinate"],["DescreteRanged","The trait indicates the coordinate is descrete, so that we can draw histogram on it"],["IntoCentric",""],["IntoPartialAxis",""],["LogScalable","The trait for the type that is able to be presented in the log scale"],["Ranged","The trait that indicates we have a ordered and ranged value Which is used to describe the axis"],["ReversableRanged","The trait indicates the ranged value can be map reversely, which means an pixel-based cooridinate is given, it's possible to figureout the underlying logic value."],["ReverseCoordTranslate","The trait indicates that the coordinate system supports reverse transform This is useful when we need an interactive plot, thus we need to map the event from the backend coordinate to the logical coordinate"]]});