import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Post {
    @Column({ primary: true, generated: true})
    id: number;
    @Column()
    Title: string;
    @Column()
    Content: string|null;
    @Column()
    Likes: number;
    @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    CreatedAt: string |null
    @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    UpdatedAt:   string | null;
    @Column()
    userId: number;

    @OneToMany(()=>User,(user)=> user.post)
    users: [];
}
