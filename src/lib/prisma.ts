// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// تهيئة العميل
const prisma = new PrismaClient();

// تصديره لاستخدامه في المشروع
export { prisma };