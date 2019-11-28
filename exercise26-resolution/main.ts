
import { LikeComponent } from './like.component';

let component = new LikeComponent(10, false);
component._likesCount = 3;
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);