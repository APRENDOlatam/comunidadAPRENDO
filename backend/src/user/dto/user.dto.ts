import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ example: 'lautad' })
  readonly username: string;
  @ApiProperty({ example: '0x022E8cd00Ce3326B67a01F58E6A67A62B03c8e61' })
  readonly accountid: string;
  @ApiProperty({
    example:
      'https://ipfs.io/ipfs/QmVnu7JQVoDRqSgHBzraYp7Hy78HwJtLFi6nUFCowTGdzp/1.png',
  })
  readonly avatar: string;
  @ApiProperty({ example: 'lautaro' })
  readonly firstname: string;
  @ApiProperty({ example: 'Pepito' })
  readonly lastname: string;
  @ApiProperty({ example: 'lautaro@lautaro.com' })
  readonly email: string;
  @ApiProperty({ example: 'Argentina' })
  readonly country: string;
  @ApiProperty({ example: 'Santa Rosa' })
  readonly city: string;
  readonly createdat: Date;
}
