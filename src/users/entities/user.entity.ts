/* eslint-disable prettier/prettier */

import { Post } from "src/posts/entities/post.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";
@Entity()
export class User {
    // @PrimaryGeneratedColumn
    @Column({ primary: true, generated: true})
    id: number;
    @Column()
    FullName: string;
    @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    Age: string | null;
    @Column()
    Email: string;
    @Column()
    Password: string ;
    // @Column()
    // posts: number; //(relación con los posts del usuario)
    @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    createdAt: string | null;
    @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: string | null;
    @DeleteDateColumn()
    deletedAt: string | null;


    @ManyToOne(()=>Post, (post)=>post.id,{
        eager: true, 
    })
    post: Post
    
}
